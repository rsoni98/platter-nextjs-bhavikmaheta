import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes using clsx and twMerge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Safely parse JSON with fallback
 */
export function safeJsonParse<T>(json: string, fallback: T): T {
  try {
    return JSON.parse(json)
  } catch {
    return fallback
  }
}

/**
 * Delay execution (useful for async operations)
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Generate a unique ID
 */
export function generateId(prefix?: string): string {
  const id = Math.random().toString(36).substring(2) + Date.now().toString(36)
  return prefix ? `${prefix}-${id}` : id
}

/**
 * Capitalize first letter of string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Format number with commas
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}