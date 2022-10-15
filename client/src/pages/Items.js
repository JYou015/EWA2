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
      <Grid item xs={9}>
        <Paper elevation={0} sx={{textAlign: 'center', fontWeight: 600}}>Subtotal</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={0} sx={{fontWeight: 600}}>${tot.sum}</Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper elevation={0} sx={{textAlign: 'center' , fontWeight: 600}}>Tax (13%)</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={0} sx={{fontWeight: 600}}>${tot.tax}</Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper elevation={0} sx={{textAlign: 'center' , fontWeight: 600}}>Total</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper elevation={0} sx={{fontWeight: 600}}>${tot.total}</Paper>
      </Grid>
    </Grid>
    </>
  );
}

export default Items;