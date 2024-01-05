

export const Lecciones = () => {
  const data = [
    { Usuario: 'Juan', Titulo: 'Historia', Hora: '15:00 - 16:30', Ubicación: 'Aula - 3' },
    { Usuario: 'Ana', Titulo: 'Ciencias', Hora: '13:30 - 15:00', Ubicación: 'Aula - 6' },
    { Usuario: 'Carlos', Titulo: 'Inglés', Hora: '14:30 - 16:00', Ubicación: 'Aula - 9' },
    { Usuario: 'Luisa', Titulo: 'Química', Hora: '14:30 - 16:00', Ubicación: 'Aula - 4' },
    { Usuario: 'Roberto', Titulo: 'Geografía', Hora: '14:30 - 16:00', Ubicación: 'Aula - 7' },
    { Usuario: 'Juan', Titulo: 'Ciencias', Hora: '13:30 - 15:00', Ubicación: 'Aula - 6' },
    { Usuario: 'Juan', Titulo: 'Inglés', Hora: '14:30 - 16:00', Ubicación: 'Aula - 9' },
    { Usuario: 'Juan', Titulo: 'Química', Hora: '14:30 - 16:00', Ubicación: 'Aula - 4' },
  ];


  const filteredData = data.filter(item => item.Usuario === 'Juan');

  return filteredData;
};

/*
const [hasMore, setHasMore] = useState(true);

const fetchMoreData = () => {
    if (fakeItems.length >= 20) {
        setHasMore(false);
        return;
    }

    setTimeout(() => {
        setFakeItems(fakeItems.concat(
            [
                { username: 'Marcelo1', title: 'Prueba1', description: 'Descripcion 1', subjectname: 'Lengua' },
                { username: 'Pepe2', title: 'Prueba 2 ', description: 'Descripcion 2', subjectname: 'Lengua 2' },
                { username: 'Sandra13', title: 'Prueba 3 ', description: 'Descripcion 3', subjectname: 'Matematica 4' }
            ]
        ));
    }, 1500);
};

return <InfiniteScroll elements={fakeItems} fetchMoreData={fetchMoreData} hasMore={hasMore}/>
} */