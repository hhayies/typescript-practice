export default function genericsBasicSample() {
    // ジェネリック型を使わない場合
    const stringReduce = (array: string[], initialValue: string): string => {
        let result = initialValue
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    }
    console.log("Generics basic sample 1:",
        stringReduce(["May", "the", "force", "be", "with", "you"], "")
    );
    
    const numberReduce = (array: number[], initialValue: number): number => {
        let result = initialValue
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    }
    console.log("Generics basic sample 1:",
        numberReduce([100, 200, 300, 400, 500], 1000)
    );

    // type Reduce = {
    //     (array: string[], initialValue: string): string
    //     (array: number[], initialValue: number): number
    // }

    type GenericReduce<T> = {
        (array: T[], initialValue: T): T
    }

    const genericStringReduce:GenericReduce<string> =
    (array: string[], initialValue: string) => {
        let result = initialValue
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    }

    console.log("Generics basic sample 1:",
        genericStringReduce(["May", "the", "force", "be", "with", "you"], "")
    );

    const genericNumberReduce:GenericReduce<number> =
    (array: number[], initialValue: number) => {
        let result = initialValue
        for (let i = 0; i < array.length; i++) {
            result += array[i];
        }
        return result;
    }

    console.log("Generics basic sample 1:",
        genericNumberReduce([100, 200, 300, 400, 500], 1000)
    );

    // ジェネリック型の定義方法
    type GenericReduce2 = {
        <T>(array: T[], initialValue: T): T
        <U>(array: U[], initialValue: U): U
    }

    type GenericReduce3<T> = (array: T[], initialValue: T) => T
    type GenericReduce4 = <T>(array: T[], initialValue: T) => T
}
