import Grid from '@mui/material/Grid';
import Item from "./Item"
import Paper from '@mui/material/Paper';

function Items({items}) {
  const sum = items.reduce((accumulator, object) => {
    return accumulator + object.quantity * object.price;
  }, 0);
  const tax = sum * 0.13;
  return (
    <>
    <Grid container spacing={2}>
    <Grid item xs={7}>
        <Paper elevation={0}>Product</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper elevation={0}>Quantity</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={0}>Price</Paper>
      </Grid>
        {items.map((item) => (
            <Item key={item.id} item={item}/>
        ))}
    </Grid>
    <div>{sum}</div>
    <div>{tax}</div>
    <div>{sum + tax}</div>
    </>
  );
}

export default Items;