"use client"

import { useEffect } from "react"
import { toast } from "react-toastify"

export function PublicKeyWarning() {
  useEffect(() => {
    toast(
      <div className="space-y-3">
        <div className="font-semibold text-base">Rebill Public Key Required</div>
        <p className="text-sm leading-relaxed opacity-90">
          This implementation requires a Rebill Public Key to initialize the SDK. Please add your{" "}
          <code className="bg-white/10 font-mono">REBILL_PUBLIC_KEY</code> as
          an environment variable and redeploy.
        </p>
        <a
          href="https://docs.rebill.com/products/payments#api-keys-and-activation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm inline-flex items-center gap-1 opacity-90 hover:opacity-100 transition-opacity underline underline-offset-2"
        >
          Learn how to get an Public key →
        </a>
      </div>,
      {
        position: "bottom-right",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: true,
      },
    )
  }, [])

  return null
}
