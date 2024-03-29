import HeroSection from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    //   <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
    //     <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
    //       Get started by editing&nbsp;
    //       <code className="font-mono font-bold">src/app/page.tsx</code>
    //     </p>
    //     <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    //       <a
    //         className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className="dark:invert"
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
    //     <Image
    //       className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>

    //   <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Docs{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Find in-depth information about Next.js features and API.
    //       </p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Learn{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Learn about Next.js in an interactive course with&nbsp;quizzes!
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Templates{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
    //         Explore starter templates for Next.js.
    //       </p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2 className={`mb-3 text-2xl font-semibold`}>
    //         Deploy{" "}
    //         <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
    //           -&gt;
    //         </span>
    //       </h2>
    //       <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
    <div className="flex h-full w-full flex-col items-center justify-center pt-20 ">
      <HeroSection />
      Main Content Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Animi non similique earum soluta vitae quia libero enim nihil aliquam
      expedita labore dolores debitis natus mollitia, molestias placeat suscipit
      ex! Corrupti? Ea et debitis ut architecto itaque, saepe at dolores, libero
      quisquam corporis, doloribus totam! Cum illum expedita quasi delectus.
      Illum esse consectetur, quis alias obcaecati aliquid labore ea. Nemo,
      laboriosam. Magnam quod a excepturi rerum quas veniam maiores tenetur
      culpa quos! Dolorem exercitationem, ratione amet nulla harum excepturi.
      Tenetur cum corrupti ullam laborum pariatur eligendi repellendus? Officia
      ullam vel perspiciatis! Aliquid, modi quasi. Eum nesciunt aspernatur odit
      repudiandae possimus a, molestias voluptatem iste nostrum distinctio quasi
      dicta, reprehenderit corrupti, numquam amet error dignissimos cupiditate
      perferendis asperiores deserunt obcaecati. Inventore, molestiae? Ratione,
      tenetur! Ipsum assumenda deleniti quibusdam! Deleniti numquam mollitia
      perspiciatis dolores illo sed eveniet voluptas quos quasi exercitationem
      perferendis labore odit consequatur voluptate officiis facere repellendus
      natus, voluptatibus, eligendi explicabo? Perferendis officia placeat aut
      quidem nemo natus quae voluptatem veniam facere provident nobis soluta
      asperiores repellendus, eveniet, quod quisquam molestias sint tempore at?
      Quaerat magnam illum doloremque sit quisquam doloribus. Quaerat atque
      temporibus saepe quo corporis accusamus voluptate ut magnam. Soluta iste
      veniam sint illum? Asperiores rem enim, soluta, fugit in, architecto
      veniam fugiat magnam officia exercitationem optio sapiente tenetur. Ipsam,
      sequi aut. Dolores dolore debitis maxime! Deserunt minus accusamus soluta
      ut voluptatum aperiam in? Dolorem impedit nam, nulla ullam sint atque iure
      ipsam, assumenda aut dolores ratione architecto rerum! Cumque sapiente
      assumenda libero iure totam dolorem eligendi neque aperiam qui animi
      asperiores laboriosam repellat sint enim ipsum molestiae eveniet placeat
      unde, quo dolor similique veniam omnis cum in. Recusandae. Ipsum harum ea
      autem ipsa molestiae deserunt natus provident aperiam numquam perferendis,
      neque impedit enim officia recusandae necessitatibus excepturi assumenda
      similique vel porro consequatur nisi rerum quas sapiente voluptas. Alias?
      Veritatis aut incidunt fuga iure sequi sint rerum mollitia debitis aliquam
      a ea esse, tempore dicta optio aspernatur, eos quam qui non maxime eum,
      reprehenderit rem. Libero, ipsum suscipit. Porro. Illo iure quod repellat
      vel ab ipsam soluta eligendi qui! Velit aut vel non saepe cupiditate
      tempora optio deserunt id. Neque quidem voluptas dolore doloremque. Ea
      culpa porro cupiditate voluptatum? Incidunt voluptate iure quia labore,
      sunt eaque tempora quaerat expedita soluta corrupti laboriosam ipsam
      perspiciatis? Nihil temporibus cupiditate similique? Sed quam similique
      aut reiciendis cupiditate eaque possimus perspiciatis, maiores autem?
      Quisquam impedit sed ut error ratione temporibus rerum eveniet id minima
      aut. Voluptatibus laborum autem quam ipsa, earum id asperiores deserunt
      commodi, alias velit tempora officiis adipisci est incidunt minima.
      Mollitia, porro. Laudantium necessitatibus nobis debitis quia. Atque
      veniam ducimus rerum quia nostrum esse facere dignissimos quo quod
      molestiae a delectus voluptates nemo, vero repudiandae est cumque
      perspiciatis consequatur quas. Et odit nostrum at, iure repudiandae quia
      enim harum cum voluptatibus sunt magni tempora labore optio sit
      exercitationem eius laudantium non praesentium unde fugit nemo quisquam
      sed! Aperiam, alias nam. Suscipit blanditiis consequatur possimus corporis
      soluta vitae eligendi pariatur quibusdam aliquam repellendus recusandae
      doloremque voluptatibus modi, velit magnam? Nam suscipit unde iusto
      possimus iure ut aut eveniet quaerat veritatis repudiandae! Odio dolor
      porro impedit suscipit ex labore quae sed corrupti commodi animi obcaecati
      ullam quisquam, dignissimos consequuntur inventore laudantium. Veritatis
      inventore, aperiam tempore sit asperiores dolore dignissimos fugit itaque
      ratione. Temporibus quod cum quo amet architecto nemo esse sint, minima
      reprehenderit voluptas enim eveniet quisquam debitis blanditiis unde
      repudiandae! Laboriosam similique est blanditiis, laborum maiores
      provident accusantium quisquam eligendi autem. Sed delectus sint illum quo
      eveniet, quisquam, cupiditate, suscipit aliquam hic tempore consequuntur
      repellat sunt commodi nesciunt veniam ut nostrum doloribus? Sequi iste
      eius, debitis praesentium tempore est molestiae molestias! Ullam suscipit
      aliquam facere commodi consectetur accusantium repellat illo obcaecati
      iusto porro aspernatur cumque, quas quo reiciendis enim nihil recusandae
      nostrum ut inventore? Ipsam autem inventore temporibus architecto unde
      atque. Tempore nulla qui, praesentium, blanditiis placeat esse recusandae,
      totam repellendus deleniti amet numquam nostrum quam quas perferendis
      ullam? Blanditiis, itaque magnam? Sunt voluptas in laboriosam odio,
      aperiam ipsum aliquid assumenda. Praesentium nesciunt ipsam ea maxime
      blanditiis minus, nihil itaque repellat placeat aspernatur? Saepe non
      commodi ad! Molestias incidunt facere, in quos enim commodi assumenda,
      ipsum possimus nesciunt autem accusantium neque. Officia sunt dolorem
      voluptates! Nostrum eligendi repellat quod odio sit, atque delectus velit
      adipisci in incidunt aspernatur at ipsa, aperiam magni, soluta dicta
      quidem eum a! Assumenda obcaecati ullam eius! Voluptates fugit cum
      recusandae reprehenderit accusantium nobis, ab dicta dignissimos expedita
      saepe doloribus magnam culpa, earum laboriosam sit a natus, dolor
      molestias. Delectus dolores fugit non praesentium facere autem
      repudiandae! Laboriosam magni rem cum dolore tempora, ipsum deleniti velit
      omnis adipisci asperiores odit earum libero enim laudantium debitis
      impedit. Harum, repudiandae quam. Architecto, ratione dolorem? Enim
      consectetur quis odit ut. Mollitia eligendi tenetur incidunt nesciunt ipsa
      asperiores repellendus ipsam ea quod, molestiae omnis rerum vero repellat
      est excepturi fuga autem illo magni expedita enim. Sed accusamus magnam
      alias ad optio. Facere sit, incidunt, quae sunt sapiente officia
      architecto eligendi provident beatae deserunt voluptas delectus aliquid
      dignissimos. Asperiores iste error in ea, nemo illo facilis, assumenda at
      suscipit, odit hic ex. Sit deleniti corrupti quasi corporis asperiores,
      itaque repellendus similique molestiae soluta dolore. Omnis voluptate
      tenetur similique, minima harum commodi quas beatae odio esse
      necessitatibus eum neque sequi, maiores eius possimus. Aut corporis dicta
      molestiae neque facilis maiores, commodi ex id repudiandae dolorem
      voluptas libero voluptate. Debitis, sint eum? Reiciendis voluptates et,
      qui a quasi saepe quos ut molestias! Natus, earum? Iure nobis repellat
      porro, ex illo voluptas tempora quibusdam animi est alias quos deserunt
      laboriosam aliquid quia esse dolorem, fugit, possimus quaerat? Excepturi,
      debitis aspernatur veritatis quos necessitatibus quisquam eligendi! Id
      itaque eum doloribus veritatis veniam non harum aspernatur eos expedita
      quaerat laborum eligendi, nam vitae iste voluptates? Officiis dolor
      assumenda praesentium sit tempora possimus unde commodi nisi libero non?
      Debitis ducimus quidem ab quam atque? Ipsa, deserunt vel ipsam velit
      laboriosam praesentium rem eum harum voluptates maxime, nostrum voluptatem
      cumque ut? Magni consequuntur quasi similique iste? Perspiciatis, quia
      labore. Quia quae, pariatur rem in ducimus sunt error? Officiis temporibus
      nostrum amet magnam aperiam provident iste? Nemo itaque magnam deserunt
      nostrum debitis sint nulla hic expedita quasi amet. Repudiandae,
      molestias. Animi libero eius iusto at. Harum architecto rem voluptas error
      voluptatibus assumenda vel ex, dicta nostrum! Quis eaque nobis similique
      ex dolorem numquam aut, culpa ipsam aperiam perspiciatis placeat!
      Repellat. Ad sequi expedita fugiat cum vero vitae unde similique dolore
      exercitationem rem minus velit autem blanditiis sint repellat, fuga,
      adipisci in aut repudiandae quam cupiditate odio. Nihil incidunt delectus
      esse? Possimus cupiditate temporibus voluptatum consequatur quos, a
      voluptate laboriosam sit vero harum optio eum fuga aliquam odit aliquid,
      quod accusamus, doloremque maxime! Beatae consequuntur quia aliquam natus
      est totam voluptate. Dolor pariatur possimus inventore quasi perferendis
      alias aspernatur eveniet eum, voluptatibus praesentium asperiores placeat
      beatae atque officia exercitationem veniam iusto mollitia quas id, commodi
      amet distinctio voluptatum! Reiciendis, quas atque? Provident ipsum fugiat
      minima, fugit aut non ut assumenda dolorum minus ratione, esse nisi
      voluptatibus neque! Ex, dolorem delectus. Quod nihil et nulla enim eaque
      officiis ipsum provident aspernatur inventore? Iure debitis sunt earum
      inventore aut? Laborum esse sint temporibus sed necessitatibus sunt
      consequuntur dolor! Harum enim ullam itaque quidem commodi deserunt velit
      porro expedita, sapiente, non nihil, sequi quasi.
    </div>
  );
}
