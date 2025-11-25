"use client"

import { useRebill } from "@/hooks/use-rebill"
import { CheckoutSkeleton } from "./skeleton"

interface RebillCheckoutProps {
  publicKey: string
  product: {
    name: { language: string; text: string }[]
    description: { language: string; text: string }[]
    amount: number
    currency: string
    deviceId: string
  }
  onSuccess?: (detail: any) => void
  onError?: (detail: any) => void
}

export function RebillCheckout({ publicKey, product, onSuccess, onError }: RebillCheckoutProps) {
  const { checkoutRef, isLoading } = useRebill({
    publicKey,
    product,
    onSuccess,
    onError,
  })

  return (
    <div className="relative">
      {isLoading && <CheckoutSkeleton />}

      {/* @ts-expect-error - rebill-checkout is a custom web component */}
      <rebill-checkout
        ref={checkoutRef}
        public-key={publicKey}
        instant-product={JSON.stringify(product)}
        css={`.rebill-checkout {
          border-radius: 0.75rem;
          border: 1px solid hsl(var(--border));
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        }`}
      />
    </div>
  )
}
