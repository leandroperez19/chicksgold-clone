import defaultBg from '../../assets/default-bg.jpg';
import osrsBg from '../../assets/osrs-bg.jpg';
import rs3Bg from '../../assets/rs3-bg.jpg';
import d2rBg from '../../assets/d2r-bg.jpg';
import eftBg from '../../assets/eft-bg.jpg'

export const getBackground = (game: string) => {
    const map = {
      'osrs': osrsBg,
      'rs3': rs3Bg,
      'd2r': d2rBg,
      'eft': eftBg,
    } as const; 
    return map[game as 'osrs' | 'rs3' | 'd2r' | 'eft'] ?? defaultBg
}
