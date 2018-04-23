// To restrict the type T to only those objects that have property id we use extends
abstract class BaseClass<T extends {id: number}> {

    public saveItem(item: T) {

        if (item.id === 0) {
           console.log("id is zero");
        }
    }
}

class ConcreteClass {
    id: number;   // we can use this class as T
}

class ConcreteWrongClass {
    id: string;   // we can't use this class as T
}

class Subclass1 extends BaseClass<ConcreteClass> {

}

class Subclass2 extends BaseClass<ConcreteWrongClass> {}  // compilation error

const subclass1 = new Subclass1();

const concrete = new ConcreteClass();
concrete.id = 0;

subclass1.saveItem(concrete);  // prints id is zero