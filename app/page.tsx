"use client"

import { useState } from "react"
import { RebillCheckout } from "@/components/rebill-checkout"
import { useConfetti } from "@/hooks/use-confetti"

export default function CheckoutPage() {
  const [paymentStatus, setPaymentStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const { fire: fireConfetti } = useConfetti()

  const instantProduct = {
    name: [
      {
        language: "en",
        text: "Premium Subscription",
      },
    ],
    description: [
      {
        language: "en",
        text: "Access to all premium features",
      },
    ],
    amount: 2999,
    currency: "ARS",
    deviceId: "fpt_9ec48794-95e9-47ba-8092-f86c1088b65a",
  }

  const handleSuccess = (detail: any) => {
    console.log("Payment successful:", detail)
    setPaymentStatus("success")
    fireConfetti()
  }

  const handleError = (detail: any) => {
    console.error("Payment error:", detail)
    setPaymentStatus("error")
    setErrorMessage(detail?.message || "Payment failed")
  }

  return (
    <main className="min-h-screen bg-background flex flex-col p-4 pt-8 w-full">
      <div className="w-full max-w-6xl mx-auto">
        <div className="mb-8 text-center space-y-2">
          {paymentStatus === "success" ? (
            <>
              <p className="text-lg text-muted-foreground text-pretty">
                Thank you for your subscription. You're all set!
              </p>
            </>
          ) : (
            <>
              <h1 className="text-4xl font-bold text-foreground mb-3 text-balance">You're almost there!</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Complete your subscription in just a few seconds
              </p>
            </>
          )}
        </div>

        <RebillCheckout
          publicKey={process.env.NEXT_PUBLIC_REBILL_PUBLIC_KEY || ""}
          product={instantProduct}
          onSuccess={handleSuccess}
          onError={handleError}
        />

      </div>
    </main>
  )
}
