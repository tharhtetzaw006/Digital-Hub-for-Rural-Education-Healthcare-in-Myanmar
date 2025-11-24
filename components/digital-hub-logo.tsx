"use client"

export function DigitalHubLogo({ size = "h-10 w-10" }: { size?: string }) {
  return (
    <svg className={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle background */}
      <circle cx="100" cy="100" r="95" fill="url(#gradient)" />
      
      {/* Hub icon - central circle with spokes */}
      <circle cx="100" cy="100" r="50" fill="white" opacity="0.95" />
      
      {/* Central core circle */}
      <circle cx="100" cy="100" r="20" fill="url(#coreGradient)" />
      
      {/* Four data points around the hub */}
      <circle cx="135" cy="65" r="12" fill="currentColor" opacity="0.8" />
      <circle cx="135" cy="135" r="12" fill="currentColor" opacity="0.8" />
      <circle cx="65" cy="65" r="12" fill="currentColor" opacity="0.8" />
      <circle cx="65" cy="135" r="12" fill="currentColor" opacity="0.8" />
      
      {/* Connecting lines */}
      <line x1="100" y1="100" x2="135" y2="65" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="100" y1="100" x2="135" y2="135" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="100" y1="100" x2="65" y2="65" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      <line x1="100" y1="100" x2="65" y2="135" stroke="currentColor" strokeWidth="2" opacity="0.6" />
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
        <radialGradient id="coreGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#1e40af" />
        </radialGradient>
      </defs>
    </svg>
  )
}
