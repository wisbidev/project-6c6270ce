'use client'

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Hello Word</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          Chào mừng đến với giải pháp của bạn — Nhanh chóng, hiệu quả, và dễ sử dụng.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-white text-brand-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
        >
          Get in touch
        </button>
      </div>
    </section>
  )
}
