export function CheckoutSkeleton() {
  return (
    <div className="absolute inset-0 z-10 bg-background p-8 space-y-6 animate-pulse">
      {/* Form fields skeleton */}
      <div className="space-y-4 pt-4">
        <div className="space-y-2">
          <div className="h-4 bg-muted rounded-md w-32"></div>
          <div className="h-12 bg-muted rounded-md w-full"></div>
        </div>

        <div className="space-y-2">
          <div className="h-4 bg-muted rounded-md w-32"></div>
          <div className="h-12 bg-muted rounded-md w-full"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded-md w-24"></div>
            <div className="h-12 bg-muted rounded-md w-full"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded-md w-24"></div>
            <div className="h-12 bg-muted rounded-md w-full"></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-4 bg-muted rounded-md w-32"></div>
          <div className="h-12 bg-muted rounded-md w-full"></div>
        </div>
      </div>

      {/* Price summary skeleton */}
      <div className="pt-4 border-t border-border space-y-3">
        <div className="flex justify-between">
          <div className="h-4 bg-muted rounded-md w-24"></div>
          <div className="h-4 bg-muted rounded-md w-32"></div>
        </div>
        <div className="flex justify-between">
          <div className="h-5 bg-muted rounded-md w-28"></div>
          <div className="h-5 bg-muted rounded-md w-36"></div>
        </div>
      </div>

      {/* Button skeleton */}
      <div className="pt-4">
        <div className="h-12 bg-muted rounded-md w-full"></div>
      </div>
    </div>
  )
}
