const InfoPage = () => {
  return (
    <section>
      <article className='grid grid-cols-1 gap-4 items-center md:grid-cols-2 md:gap-12'>
        <div>
          <h2 className='text-2xl mb-4 font-bold md:text-4xl'>Título</h2>
          <img src='./images/tareas.jpg' className='rounded-md mb-4 md:hidden' />
          <p className='text-justify'>
            Integer ut justo pulvinar, placerat libero quis, viverra ipsum. Cras
            porttitor vitae nibh at ornare. Donec velit tortor, ornare in
            ullamcorper vel, ultricies ultricies enim. Vestibulum sit amet neque
            eu lorem scelerisque ornare auctor in justo. Pellentesque volutpat
            neque ipsum, in mattis lorem fringilla a. Quisque elementum, nibh
            sit amet dictum tincidunt, purus leo varius elit, at gravida odio
            leo in massa. Quisque vestibulum mauris tincidunt lobortis
            vulputate. Donec laoreet in tellus vehicula placerat. Nulla
            fermentum lorem ac placerat ullamcorper. Donec ut eros vitae ex
            pretium tincidunt. Proin tristique ante eget lectus convallis, vitae
            varius metus venenatis.
          </p>
        </div>
        <img src='./images/tareas.jpg' className='hidden rounded-md mb-4 md:block' />
      </article>
    </section>
  );
};

export default InfoPage;
