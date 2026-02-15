interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-white dark:bg-black border-b border-gray-200/50 dark:border-white/10 pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
            {title}
          </h1>
          <p className="mt-8 text-xl md:text-2xl leading-relaxed text-gray-600 dark:text-gray-400 font-light max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
