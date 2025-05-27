import styles from './page.module.css';
import { colors } from '@/lib/colors';
import MenuCard from '@/components/menus/menu_card';

export default function MenuPage() {
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <MenuCard
          title="Food"
          description="Check out Lone Star's bold and smokey flavours, comfort food with a southern kick"
          download="/assets/menus/food_menu.pdf"
          view="/menu/food"
          tornColor={colors.greydark3}
          className='food'
        />
        <MenuCard
          title="Cocktails"
          description="Fast, Fresh, and made to party! Check out OTD's cocktails on tap and shooters that pack a punch!"
          download="assets/menus/cocktail_menu.pdf"
          view="/menu/cocktails"
          tornColor={colors.greydark2}
          className='cocktails'
        />
        <MenuCard
          title="Beers"
          description="Something for every beer lover! Discover our selection of Craft Beersfrom top local brewers."
          download="/assets/menus/beer_menu.pdf"
          view="/menu/beer"
          tornColor={colors.greydark1}
          className='beer'
        />
      </div>

    </div>
    
  )
}
