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
        }
      },
      {
        name: "created",
        label: "Created",
        options: {
        filter: true,
        sort: true,
        }
      },
      {
        name: "link",
        label: "Link",
        options: {
        filter: true,
        sort: true,
        display:false,
        }
      },

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

