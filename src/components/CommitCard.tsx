export function CommitCard() {
  return (
    <div className="bg-brand-base-post w-[416px] rounded-lg p-8 m-auto border-2 border-brand-base-background hover:border-brand-base-label">
      <div className="flex gap-4">
        <h1 className="text-xl font-bold text-brand-base-title">
          JavaScript data types and data structures
        </h1>
        <span className="text-brand-base-span text-sm min-w-14">Há 1 dia</span>
      </div>
      <p className="mt-5 text-brand-base-text text-md">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus eaque
        molestiae ab ex sint omnis non odio nobis mollitia pariatur fugit
        consectetur expedita praesentium repudiandae, voluptas nostrum ad
        corporis laudantium.
      </p>
    </div>
  );
}
