/**
 * HeroSkeleton — shown while the hero data is loading.
 * Matches the dimensions and layout of the default hero state.
 */

export default function HeroSkeleton() {
  return (
    <section
      aria-label="Loading hero section"
      className="min-h-screen flex items-center justify-center"
      style={{
        background: 'linear-gradient(180deg, #EEF2FF 0%, #F5F3FF 100%)',
      }}
    >
      <div className="container mx-auto px-6 text-center space-y-6 max-w-2xl">
        {/* Headline skeleton */}
        <div
          className="h-16 rounded-md mx-auto animate-pulse"
          style={{ backgroundColor: '#C7D2FE', width: '60%', maxWidth: 480 }}
          role="status"
          aria-label="Loading headline"
        />

        {/* Subtitle skeleton */}
        <div
          className="space-y-3 mx-auto animate-pulse"
          style={{ maxWidth: 560 }}
        >
          <div
            className="h-5 rounded-md animate-pulse"
            style={{ backgroundColor: '#C7D2FE', width: '100%' }}
            role="status"
            aria-label="Loading subtitle"
          />
          <div
            className="h-5 rounded-md animate-pulse"
            style={{ backgroundColor: '#C7D2FE', width: '80%', margin: '0 auto' }}
            role="status"
            aria-label="Loading subtitle"
          />
        </div>

        {/* CTA skeleton */}
        <div
          className="inline-block h-12 rounded-lg animate-pulse"
          style={{ backgroundColor: '#C7D2FE', width: 160 }}
          role="status"
          aria-label="Loading button"
        />
      </div>
    </section>
  )
}
