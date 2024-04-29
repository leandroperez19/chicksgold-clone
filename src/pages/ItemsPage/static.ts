import priceIcon from '../../assets/item-bag.svg';
import feather from '../../assets/feather.svg';
import filter from '../../assets/filter.svg';

export const priceFilter = {
    label: 'Price',
    selected: 'All',
    options: [''],
    disabled: true,
    icon: priceIcon
}

export const itemTypeFilter = {
    label: 'Item Type',
    selected: 'All',
    options: ['All', 'Armour', 'Weapons', 'Consumables', 'Jewelry', 'Crafting Materials', 'Shields', 'Other'],
    disabled: false,
    icon: feather
}

export const sortbyFilter = {
    label: 'Sort By',
    selected: 'Featured',
    options: ['Featured', 'Price: (Low to High)', 'Price: (High to Low)'],
    disabled: false,
    icon: filter
}