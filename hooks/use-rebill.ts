"use client"

import { useEffect, useRef, useState } from "react"
import "rebill-web-components-sdk"

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
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
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
