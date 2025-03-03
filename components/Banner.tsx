export default function Banner(): JSX.Element {
  return (
    <div className="bg-zinc-100 text-center md:flex justify-center p-5 dark:bg-zinc-800 text-base">
      <div className="mt-2">
        <span>
          Incorporate como coordinador/a,{' '}
          <a
            href="https://wa.me/541157577039"
            className="text-[#25D366] dark:text-[#25D366] font-medium ml-2"
            aria-label="Contactar por WhatsApp"
          >
          › WhatsApp 
          </a>
        </span>
      </div>
    </div>
  );
}
