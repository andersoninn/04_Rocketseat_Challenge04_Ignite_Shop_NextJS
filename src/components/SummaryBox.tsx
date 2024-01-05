export default function SummaryBox({
   children,
}: {
   children: React.ReactNode;
}) {
   return (
      <div className="flex items-center justify-center w-full">
         <main className="max-w-[864px] bg-brand-base-profile -mt-[106px] rounded-lg p-8 w-full min-h-[208px]">
            {children}
         </main>
      </div>
   );
}
