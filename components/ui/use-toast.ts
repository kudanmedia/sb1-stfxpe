// Simplified version of the use-toast hook
import { useState } from "react"

export interface Toast {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const toast = ({ title, description, action }: Omit<Toast, "id">) => {
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: Math.random().toString(), title, description, action },
    ])
  }

  const dismiss = (id: string) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    )
  }

  return {
    toast,
    dismiss,
    toasts,
  }
}