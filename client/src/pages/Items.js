import Grid from '@mui/material/Grid';
import Item from "./Item"
import Paper from '@mui/material/Paper';

function Items({items, onDelete, tot}) {
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
            <Item key={item.id} item={item} onDelete={onDelete}/>
        ))}
    </Grid>
    <div>{tot.sum}</div>
    <div>{tot.tax}</div>
    <div>{tot.total}</div>
    </>
  );
}

export default Items;