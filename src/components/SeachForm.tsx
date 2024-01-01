export function SearchForm() {
  return (
    <main className="m-auto flex justify-center mt-14">
      <div className="container max-w-[864px]">
        <div className="flex gap-4 justify-between text-md">
          <h1>Publicações</h1>
          <span>6 publicações</span>
        </div>
        <form action="" className="mt-3">
          <input
            type="text"
            className="container max-w-[864px] px-4 py-3 bg-brand-base-input rounded-md placeholder:text-brand-base-label 
            border border-brand-base-label focus:border-brand-blue cursor-pointer"
            placeholder="Buscar conteúdo"
          />
        </form>
      </div>
    </main>
  );
}
