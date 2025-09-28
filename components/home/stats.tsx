export default function StatsSection() {
  return (
    <section>
      <div className="bg-muted/50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div>
            <h2 className="text-4xl font-semibold lg:text-5xl">
              Pencapaian Kami
            </h2>
            <p className="text-muted-foreground mt-4 text-balance text-lg">
              Kami telah membantu banyak usaha untuk membuat website yang
              menarik dan profesional.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:mt-16 md:grid-cols-4">
            <div>
              <div className="text-foreground text-4xl font-bold">1000+</div>
              <p className="text-muted-foreground">Member</p>
            </div>
            <div>
              <div className="text-foreground text-4xl font-bold">200+</div>
              <p className="text-muted-foreground">Template</p>
            </div>
            <div>
              <div className="text-foreground text-4xl font-bold">100+</div>
              <p className="text-muted-foreground">Team</p>
            </div>
            <div>
              <div className="text-foreground text-4xl font-bold">100+</div>
              <p className="text-muted-foreground">Project</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
