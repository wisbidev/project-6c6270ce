interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-brand-light rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-brand-dark mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
