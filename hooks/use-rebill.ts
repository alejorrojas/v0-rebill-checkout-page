"use client"

import { useEffect, useRef, useState } from "react"

interface RebillProduct {
  name: { language: string; text: string }[]
  description: { language: string; text: string }[]
  amount: number
  currency: string
  deviceId: string
}

interface UseRebillProps {
  publicKey: string
  product: RebillProduct
  onSuccess?: (detail: any) => void
  onError?: (detail: any) => void
}

export function useRebill({ publicKey, product, onSuccess, onError }: UseRebillProps) {
  const checkoutRef = useRef<HTMLElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initializeSDK = async () => {
      try {
        await import("rebill-web-components-sdk")
        console.log("Rebill SDK loaded")
        setIsLoading(false)
      } catch (error) {
        console.error("[v0] Failed to load Rebill SDK:", error)
        setIsLoading(false)
      }
    }

    initializeSDK()
  }, [])

  useEffect(() => {
    const checkoutElement = checkoutRef.current
    if (!checkoutElement) return

    const handleSuccess = (event: CustomEvent) => {
      onSuccess?.(event.detail)
    }

    const handleError = (event: CustomEvent) => {
      onError?.(event.detail)
    }

    const successListener = (event: Event) => {
      handleSuccess(event as CustomEvent)
    }

    const errorListener = (event: Event) => {
      handleError(event as CustomEvent)
    }

    checkoutElement.addEventListener("success", successListener as EventListener)
    checkoutElement.addEventListener("error", errorListener as EventListener)

    return () => {
      checkoutElement.removeEventListener("success", successListener as EventListener)
      checkoutElement.removeEventListener("error", errorListener as EventListener)
    }
  }, [onSuccess, onError])

  return {
    checkoutRef,
    isLoading,
    publicKey,
    product,
  }
}
