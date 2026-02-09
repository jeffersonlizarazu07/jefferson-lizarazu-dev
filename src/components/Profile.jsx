export const Profile = () => {
  return (
    <Box>
      <Box>
        <Header />
      </Box>

      <Box>
        <Typography>Sobre mi</Typography>
        <Typography>
          Hola. Mi nombre es Jefferson Lizarazu. Soy desarrollador full stack y
          he decidido crear un lugar donde pueda compartir con ustedes mis
          proyectos realizados y aquellos proyectos que me encuentro realizando
          actualmente.
        </Typography>
      </Box>

      <Box>
        <MainCard />
        <Typography>Proyectos</Typography>
        {data.map((item) => {
          <Box key={data}>
            <Typography>{item.id}</Typography>
            <Typography>{item.name}</Typography>
            <Typography>{item.description}</Typography>
            <Typography>{item.programingLeguage}</Typography>
          </Box>;
        })}
      </Box>

      <Box>
        <ContactForm />
      </Box>

      <Box>
        <Footer />
      </Box>
    </Box>
  );
};
