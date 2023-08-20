import { collection, getDocs, getFirestore, where } from "firebase/firestore";
import { createContext } from "react";

export const FirestoneContext = createContext()

export default function FirestoneProvider ({ defaultValues = [], children }) {
    const db = getFirestore();

    function getAllBikes() {
        const bikeGalery = collection(db, 'products')
        getDocs(bikeGalery)
            .then((snapshot) => {
                snapshot.docs.map((bike) => {
                    console.log(bike.id)
                    console.log(bike.data())
                })
            })
    }

    function getBikesByCategory (category) {
        const queryByCategory = query(collection(db, 'products'), where('category', '==', category))
        getDocs(queryByCategory)
            .then((snapshot) => {
                console.log(snapshot)
                if (snapshot.size === 0) {
                    console.log('No results')
                }
                snapshot.docs.map((bike) => {
                    console.log(bike.id)
                    console.log(bike.data())
                })
            })
    }

    return (
        <FirestoneContext.Provider value={{
            getAllBikes,
            getBikesByCategory,
        }}>
            {children}
        </FirestoneContext.Provider>
    )
}