import FeatureCard from './FeatureCard'
import {
  featuresSectionData,
  type FeaturesSectionResponse,
} from '@/lib/mock/features-section'

/**
 * Simulates an async API call — returns the mock response after a delay.
 * Replace with real fetch() in the backend stage.
 */
async function fetchFeatures(): Promise<FeaturesSectionResponse> {
  // Simulate network latency during development
  await new Promise((resolve) => setTimeout(resolve, 0))
  return featuresSectionData
}

// Section label and title config
const SECTION_LABEL = 'FEATURES'
const SECTION_TITLE = 'Key Features'

interface FeaturesProps {
  /** Overrides data from the mock module — used by the backend stage */
  data?: FeaturesSectionResponse
}

export default async function Features({ data }: FeaturesProps = {}) {
  const features = (data ?? (await fetchFeatures())).items

  return (
    <section
      id="features"
      className="bg-[#F8FAFC] py-[100px]"
      aria-labelledby="features-heading"
    >
      <div className="container mx-auto px-6">
        {/* Section Label & Title */}
        <header className="text-center mb-[60px]">
          <span className="block text-[0.875rem] font-semibold uppercase tracking-widest text-[#6366F1] mb-3">
            {SECTION_LABEL}
          </span>
          <h2
            id="features-heading"
            className="text-[clamp(2rem,4vw,2.75rem)] leading-[1.15] font-extrabold text-[#1E293B]"
          >
            {SECTION_TITLE}
          </h2>
        </header>

        {/* Feature Grid */}
        <div
          className="grid gap-6
                     grid-cols-1        /* Mobile: ≤767px */
                     md:grid-cols-2    /* Tablet: 768–1023px */
                     lg:grid-cols-3    /* Desktop: ≥1024px */
                     max-w-[1200px]
                     mx-auto"
          style={{ animationDelay: '0ms' }}
        >
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="feature-card-animate"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
