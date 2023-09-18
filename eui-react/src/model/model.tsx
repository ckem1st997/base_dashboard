interface DataRaw {
    direction: string;
    name: string;
    email: JSX.Element;
    location: JSX.Element;
    date: string;
    account: string;
    amount: string;
    phone: string;
    version: string;
    id: string;
    soft:number;
    city:JSX.Element;
    country: string,

}

type CellProps = {
    rowIndex: number;
    columnId: string;
  };