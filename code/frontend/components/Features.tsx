import FeatureCard from './FeatureCard'

const features = [
  { title: 'Tính năng 1', description: 'Mô tả ngắn gọn về tính năng đầu tiên', icon: '🚀' },
  { title: 'Tính năng 2', description: 'Mô tả ngắn gọn về tính năng thứ hai', icon: '⚡' },
  { title: 'Tính năng 3', description: 'Mô tả ngắn gọn về tính năng thứ ba', icon: '🎯' },
  { title: 'Tính năng 4', description: 'Mô tả ngắn gọn về tính năng thứ tư', icon: '🔒' },
  { title: 'Tính năng 5', description: 'Mô tả ngắn gọn về tính năng thứ năm', icon: '📊' },
  { title: 'Tính năng 6', description: 'Mô tả ngắn gọn về tính năng thứ sáu', icon: '🌟' },
]

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
