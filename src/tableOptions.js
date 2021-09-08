export const columns = [
      {
      name: "type",
      label: "Type",
      options: {
        filter: true,
        sort: true,
      }
      },
      {
      name: "DOI",
      label: "DOI",
      options: {
        filter: true,
        sort: true,
      }
      },
      {
        name: "title",
        label: "Title",
        options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <div>{(value[0].length > 35) ? value[0].substr(0, 35) + '...': value}</div>
          );
      }
        }
      },
      {
        name: "created",
        label: "Created",
        options: {
        filter: true,
        sort: true,
        customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div>{value}</div>
            );
        }
      }
      }
    ];

export const options = {
              filter: false,
              filterType: 'dropdown',
              responsive: 'standard',
              fixedHeader: true,
              fixedSelectColumn: false,
              searchOpen: true,
              selectableRows:'none',
              rowsPerPage:30
              };

export default{
  columns,options
}

