import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function Item({item}) {
  return (
    <>
      <Grid item xs={7}>
        <Paper>{item.product}</Paper>
      </Grid>
      <Grid item xs={2}>
        <Paper>{item.quantity}</Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper>{item.price}</Paper>
      </Grid>
    </>
  );
}

export default Item;