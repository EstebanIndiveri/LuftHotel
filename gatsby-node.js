exports.createPages=async({actions,graphql,reporter})=>{
    const resultado=await graphql(`
    query{
        allDatoCmsHabitacione{
        nodes{
          slug
        }
      }
    }
    `);
    // console.log(resultado.data.allDatoCmsHabitacione.nodes);
    if(resultado.errors){
        reporter.panic('No hubo resultados',resultado.errors);
    }
    // si hay paginas, crea los archivos
    const habitaciones=resultado.data.allDatoCmsHabitacione.nodes;
    habitaciones.forEach(habitacion=>{
        actions.createPage({
            path:habitacion.slug,
            component:require.resolve('./src/components/Habitaciones.jsx'),
            context:{
                slug:habitacion.slug
            }
        })
    })
}