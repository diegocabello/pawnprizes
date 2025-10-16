
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model challenges
 * 
 */
export type challenges = $Result.DefaultSelection<Prisma.$challengesPayload>
/**
 * Model open_challenges
 * 
 */
export type open_challenges = $Result.DefaultSelection<Prisma.$open_challengesPayload>
/**
 * Model targeted_challenges
 * 
 */
export type targeted_challenges = $Result.DefaultSelection<Prisma.$targeted_challengesPayload>
/**
 * Model challenge_submissions
 * 
 */
export type challenge_submissions = $Result.DefaultSelection<Prisma.$challenge_submissionsPayload>
/**
 * Model profile
 * 
 */
export type profile = $Result.DefaultSelection<Prisma.$profilePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const c_target_type: {
  targeted: 'targeted',
  open: 'open'
};

export type c_target_type = (typeof c_target_type)[keyof typeof c_target_type]


export const gender_type: {
  male: 'male',
  female: 'female',
  other: 'other'
};

export type gender_type = (typeof gender_type)[keyof typeof gender_type]

}

export type c_target_type = $Enums.c_target_type

export const c_target_type: typeof $Enums.c_target_type

export type gender_type = $Enums.gender_type

export const gender_type: typeof $Enums.gender_type

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Challenges
 * const challenges = await prisma.challenges.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Challenges
   * const challenges = await prisma.challenges.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.challenges`: Exposes CRUD operations for the **challenges** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenges
    * const challenges = await prisma.challenges.findMany()
    * ```
    */
  get challenges(): Prisma.challengesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.open_challenges`: Exposes CRUD operations for the **open_challenges** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Open_challenges
    * const open_challenges = await prisma.open_challenges.findMany()
    * ```
    */
  get open_challenges(): Prisma.open_challengesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.targeted_challenges`: Exposes CRUD operations for the **targeted_challenges** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Targeted_challenges
    * const targeted_challenges = await prisma.targeted_challenges.findMany()
    * ```
    */
  get targeted_challenges(): Prisma.targeted_challengesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.challenge_submissions`: Exposes CRUD operations for the **challenge_submissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Challenge_submissions
    * const challenge_submissions = await prisma.challenge_submissions.findMany()
    * ```
    */
  get challenge_submissions(): Prisma.challenge_submissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.profileDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    challenges: 'challenges',
    open_challenges: 'open_challenges',
    targeted_challenges: 'targeted_challenges',
    challenge_submissions: 'challenge_submissions',
    profile: 'profile'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "challenges" | "open_challenges" | "targeted_challenges" | "challenge_submissions" | "profile"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      challenges: {
        payload: Prisma.$challengesPayload<ExtArgs>
        fields: Prisma.challengesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.challengesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.challengesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>
          }
          findFirst: {
            args: Prisma.challengesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.challengesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>
          }
          findMany: {
            args: Prisma.challengesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>[]
          }
          create: {
            args: Prisma.challengesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>
          }
          createMany: {
            args: Prisma.challengesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.challengesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>[]
          }
          delete: {
            args: Prisma.challengesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>
          }
          update: {
            args: Prisma.challengesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>
          }
          deleteMany: {
            args: Prisma.challengesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.challengesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.challengesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>[]
          }
          upsert: {
            args: Prisma.challengesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challengesPayload>
          }
          aggregate: {
            args: Prisma.ChallengesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenges>
          }
          groupBy: {
            args: Prisma.challengesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChallengesGroupByOutputType>[]
          }
          count: {
            args: Prisma.challengesCountArgs<ExtArgs>
            result: $Utils.Optional<ChallengesCountAggregateOutputType> | number
          }
        }
      }
      open_challenges: {
        payload: Prisma.$open_challengesPayload<ExtArgs>
        fields: Prisma.open_challengesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.open_challengesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challengesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.open_challengesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challengesPayload>
          }
          findFirst: {
            args: Prisma.open_challengesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challengesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.open_challengesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challengesPayload>
          }
          findMany: {
            args: Prisma.open_challengesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challengesPayload>[]
          }
          create: {
            args: Prisma.open_challengesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challengesPayload>
          }
          createMany: {
            args: Prisma.open_challengesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.open_challengesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challengesPayload>[]
          }
          delete: {
            args: Prisma.open_challengesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challengesPayload>
          }
          update: {
            args: Prisma.open_challengesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challengesPayload>
          }
          deleteMany: {
            args: Prisma.open_challengesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.open_challengesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.open_challengesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challengesPayload>[]
          }
          upsert: {
            args: Prisma.open_challengesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challengesPayload>
          }
          aggregate: {
            args: Prisma.Open_challengesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpen_challenges>
          }
          groupBy: {
            args: Prisma.open_challengesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Open_challengesGroupByOutputType>[]
          }
          count: {
            args: Prisma.open_challengesCountArgs<ExtArgs>
            result: $Utils.Optional<Open_challengesCountAggregateOutputType> | number
          }
        }
      }
      targeted_challenges: {
        payload: Prisma.$targeted_challengesPayload<ExtArgs>
        fields: Prisma.targeted_challengesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.targeted_challengesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challengesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.targeted_challengesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challengesPayload>
          }
          findFirst: {
            args: Prisma.targeted_challengesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challengesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.targeted_challengesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challengesPayload>
          }
          findMany: {
            args: Prisma.targeted_challengesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challengesPayload>[]
          }
          create: {
            args: Prisma.targeted_challengesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challengesPayload>
          }
          createMany: {
            args: Prisma.targeted_challengesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.targeted_challengesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challengesPayload>[]
          }
          delete: {
            args: Prisma.targeted_challengesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challengesPayload>
          }
          update: {
            args: Prisma.targeted_challengesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challengesPayload>
          }
          deleteMany: {
            args: Prisma.targeted_challengesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.targeted_challengesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.targeted_challengesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challengesPayload>[]
          }
          upsert: {
            args: Prisma.targeted_challengesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challengesPayload>
          }
          aggregate: {
            args: Prisma.Targeted_challengesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTargeted_challenges>
          }
          groupBy: {
            args: Prisma.targeted_challengesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Targeted_challengesGroupByOutputType>[]
          }
          count: {
            args: Prisma.targeted_challengesCountArgs<ExtArgs>
            result: $Utils.Optional<Targeted_challengesCountAggregateOutputType> | number
          }
        }
      }
      challenge_submissions: {
        payload: Prisma.$challenge_submissionsPayload<ExtArgs>
        fields: Prisma.challenge_submissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.challenge_submissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.challenge_submissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>
          }
          findFirst: {
            args: Prisma.challenge_submissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.challenge_submissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>
          }
          findMany: {
            args: Prisma.challenge_submissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>[]
          }
          create: {
            args: Prisma.challenge_submissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>
          }
          createMany: {
            args: Prisma.challenge_submissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.challenge_submissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>[]
          }
          delete: {
            args: Prisma.challenge_submissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>
          }
          update: {
            args: Prisma.challenge_submissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>
          }
          deleteMany: {
            args: Prisma.challenge_submissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.challenge_submissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.challenge_submissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>[]
          }
          upsert: {
            args: Prisma.challenge_submissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$challenge_submissionsPayload>
          }
          aggregate: {
            args: Prisma.Challenge_submissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChallenge_submissions>
          }
          groupBy: {
            args: Prisma.challenge_submissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Challenge_submissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.challenge_submissionsCountArgs<ExtArgs>
            result: $Utils.Optional<Challenge_submissionsCountAggregateOutputType> | number
          }
        }
      }
      profile: {
        payload: Prisma.$profilePayload<ExtArgs>
        fields: Prisma.profileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          findFirst: {
            args: Prisma.profileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          findMany: {
            args: Prisma.profileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>[]
          }
          create: {
            args: Prisma.profileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          createMany: {
            args: Prisma.profileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>[]
          }
          delete: {
            args: Prisma.profileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          update: {
            args: Prisma.profileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          deleteMany: {
            args: Prisma.profileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>[]
          }
          upsert: {
            args: Prisma.profileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.profileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.profileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    challenges?: challengesOmit
    open_challenges?: open_challengesOmit
    targeted_challenges?: targeted_challengesOmit
    challenge_submissions?: challenge_submissionsOmit
    profile?: profileOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ChallengesCountOutputType
   */

  export type ChallengesCountOutputType = {
    challenge_submissions: number
  }

  export type ChallengesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge_submissions?: boolean | ChallengesCountOutputTypeCountChallenge_submissionsArgs
  }

  // Custom InputTypes
  /**
   * ChallengesCountOutputType without action
   */
  export type ChallengesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChallengesCountOutputType
     */
    select?: ChallengesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChallengesCountOutputType without action
   */
  export type ChallengesCountOutputTypeCountChallenge_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challenge_submissionsWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    challenge_submissions: number
    challenges: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge_submissions?: boolean | ProfileCountOutputTypeCountChallenge_submissionsArgs
    challenges?: boolean | ProfileCountOutputTypeCountChallengesArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountChallenge_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challenge_submissionsWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challengesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model challenges
   */

  export type AggregateChallenges = {
    _count: ChallengesCountAggregateOutputType | null
    _avg: ChallengesAvgAggregateOutputType | null
    _sum: ChallengesSumAggregateOutputType | null
    _min: ChallengesMinAggregateOutputType | null
    _max: ChallengesMaxAggregateOutputType | null
  }

  export type ChallengesAvgAggregateOutputType = {
    id: number | null
  }

  export type ChallengesSumAggregateOutputType = {
    id: number | null
  }

  export type ChallengesMinAggregateOutputType = {
    id: number | null
    c_target: $Enums.c_target_type | null
    c_description: string | null
    title: string | null
    time_created: Date | null
    creator_id: string | null
  }

  export type ChallengesMaxAggregateOutputType = {
    id: number | null
    c_target: $Enums.c_target_type | null
    c_description: string | null
    title: string | null
    time_created: Date | null
    creator_id: string | null
  }

  export type ChallengesCountAggregateOutputType = {
    id: number
    c_target: number
    c_description: number
    title: number
    time_created: number
    creator_id: number
    _all: number
  }


  export type ChallengesAvgAggregateInputType = {
    id?: true
  }

  export type ChallengesSumAggregateInputType = {
    id?: true
  }

  export type ChallengesMinAggregateInputType = {
    id?: true
    c_target?: true
    c_description?: true
    title?: true
    time_created?: true
    creator_id?: true
  }

  export type ChallengesMaxAggregateInputType = {
    id?: true
    c_target?: true
    c_description?: true
    title?: true
    time_created?: true
    creator_id?: true
  }

  export type ChallengesCountAggregateInputType = {
    id?: true
    c_target?: true
    c_description?: true
    title?: true
    time_created?: true
    creator_id?: true
    _all?: true
  }

  export type ChallengesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenges to aggregate.
     */
    where?: challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengesOrderByWithRelationInput | challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned challenges
    **/
    _count?: true | ChallengesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChallengesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChallengesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChallengesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChallengesMaxAggregateInputType
  }

  export type GetChallengesAggregateType<T extends ChallengesAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenges]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenges[P]>
      : GetScalarType<T[P], AggregateChallenges[P]>
  }




  export type challengesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challengesWhereInput
    orderBy?: challengesOrderByWithAggregationInput | challengesOrderByWithAggregationInput[]
    by: ChallengesScalarFieldEnum[] | ChallengesScalarFieldEnum
    having?: challengesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChallengesCountAggregateInputType | true
    _avg?: ChallengesAvgAggregateInputType
    _sum?: ChallengesSumAggregateInputType
    _min?: ChallengesMinAggregateInputType
    _max?: ChallengesMaxAggregateInputType
  }

  export type ChallengesGroupByOutputType = {
    id: number
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created: Date
    creator_id: string | null
    _count: ChallengesCountAggregateOutputType | null
    _avg: ChallengesAvgAggregateOutputType | null
    _sum: ChallengesSumAggregateOutputType | null
    _min: ChallengesMinAggregateOutputType | null
    _max: ChallengesMaxAggregateOutputType | null
  }

  type GetChallengesGroupByPayload<T extends challengesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChallengesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChallengesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChallengesGroupByOutputType[P]>
            : GetScalarType<T[P], ChallengesGroupByOutputType[P]>
        }
      >
    >


  export type challengesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    c_target?: boolean
    c_description?: boolean
    title?: boolean
    time_created?: boolean
    creator_id?: boolean
    challenge_submissions?: boolean | challenges$challenge_submissionsArgs<ExtArgs>
    profile?: boolean | challenges$profileArgs<ExtArgs>
    open_challenges?: boolean | challenges$open_challengesArgs<ExtArgs>
    targeted_challenges?: boolean | challenges$targeted_challengesArgs<ExtArgs>
    _count?: boolean | ChallengesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenges"]>

  export type challengesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    c_target?: boolean
    c_description?: boolean
    title?: boolean
    time_created?: boolean
    creator_id?: boolean
    profile?: boolean | challenges$profileArgs<ExtArgs>
  }, ExtArgs["result"]["challenges"]>

  export type challengesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    c_target?: boolean
    c_description?: boolean
    title?: boolean
    time_created?: boolean
    creator_id?: boolean
    profile?: boolean | challenges$profileArgs<ExtArgs>
  }, ExtArgs["result"]["challenges"]>

  export type challengesSelectScalar = {
    id?: boolean
    c_target?: boolean
    c_description?: boolean
    title?: boolean
    time_created?: boolean
    creator_id?: boolean
  }

  export type challengesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "c_target" | "c_description" | "title" | "time_created" | "creator_id", ExtArgs["result"]["challenges"]>
  export type challengesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge_submissions?: boolean | challenges$challenge_submissionsArgs<ExtArgs>
    profile?: boolean | challenges$profileArgs<ExtArgs>
    open_challenges?: boolean | challenges$open_challengesArgs<ExtArgs>
    targeted_challenges?: boolean | challenges$targeted_challengesArgs<ExtArgs>
    _count?: boolean | ChallengesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type challengesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | challenges$profileArgs<ExtArgs>
  }
  export type challengesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | challenges$profileArgs<ExtArgs>
  }

  export type $challengesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "challenges"
    objects: {
      challenge_submissions: Prisma.$challenge_submissionsPayload<ExtArgs>[]
      profile: Prisma.$profilePayload<ExtArgs> | null
      open_challenges: Prisma.$open_challengesPayload<ExtArgs> | null
      targeted_challenges: Prisma.$targeted_challengesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      c_target: $Enums.c_target_type
      c_description: string
      title: string
      time_created: Date
      creator_id: string | null
    }, ExtArgs["result"]["challenges"]>
    composites: {}
  }

  type challengesGetPayload<S extends boolean | null | undefined | challengesDefaultArgs> = $Result.GetResult<Prisma.$challengesPayload, S>

  type challengesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<challengesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChallengesCountAggregateInputType | true
    }

  export interface challengesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['challenges'], meta: { name: 'challenges' } }
    /**
     * Find zero or one Challenges that matches the filter.
     * @param {challengesFindUniqueArgs} args - Arguments to find a Challenges
     * @example
     * // Get one Challenges
     * const challenges = await prisma.challenges.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends challengesFindUniqueArgs>(args: SelectSubset<T, challengesFindUniqueArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenges that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {challengesFindUniqueOrThrowArgs} args - Arguments to find a Challenges
     * @example
     * // Get one Challenges
     * const challenges = await prisma.challenges.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends challengesFindUniqueOrThrowArgs>(args: SelectSubset<T, challengesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengesFindFirstArgs} args - Arguments to find a Challenges
     * @example
     * // Get one Challenges
     * const challenges = await prisma.challenges.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends challengesFindFirstArgs>(args?: SelectSubset<T, challengesFindFirstArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenges that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengesFindFirstOrThrowArgs} args - Arguments to find a Challenges
     * @example
     * // Get one Challenges
     * const challenges = await prisma.challenges.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends challengesFindFirstOrThrowArgs>(args?: SelectSubset<T, challengesFindFirstOrThrowArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenges
     * const challenges = await prisma.challenges.findMany()
     * 
     * // Get first 10 Challenges
     * const challenges = await prisma.challenges.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challengesWithIdOnly = await prisma.challenges.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends challengesFindManyArgs>(args?: SelectSubset<T, challengesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenges.
     * @param {challengesCreateArgs} args - Arguments to create a Challenges.
     * @example
     * // Create one Challenges
     * const Challenges = await prisma.challenges.create({
     *   data: {
     *     // ... data to create a Challenges
     *   }
     * })
     * 
     */
    create<T extends challengesCreateArgs>(args: SelectSubset<T, challengesCreateArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenges.
     * @param {challengesCreateManyArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenges = await prisma.challenges.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends challengesCreateManyArgs>(args?: SelectSubset<T, challengesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenges and returns the data saved in the database.
     * @param {challengesCreateManyAndReturnArgs} args - Arguments to create many Challenges.
     * @example
     * // Create many Challenges
     * const challenges = await prisma.challenges.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenges and only return the `id`
     * const challengesWithIdOnly = await prisma.challenges.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends challengesCreateManyAndReturnArgs>(args?: SelectSubset<T, challengesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenges.
     * @param {challengesDeleteArgs} args - Arguments to delete one Challenges.
     * @example
     * // Delete one Challenges
     * const Challenges = await prisma.challenges.delete({
     *   where: {
     *     // ... filter to delete one Challenges
     *   }
     * })
     * 
     */
    delete<T extends challengesDeleteArgs>(args: SelectSubset<T, challengesDeleteArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenges.
     * @param {challengesUpdateArgs} args - Arguments to update one Challenges.
     * @example
     * // Update one Challenges
     * const challenges = await prisma.challenges.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends challengesUpdateArgs>(args: SelectSubset<T, challengesUpdateArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenges.
     * @param {challengesDeleteManyArgs} args - Arguments to filter Challenges to delete.
     * @example
     * // Delete a few Challenges
     * const { count } = await prisma.challenges.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends challengesDeleteManyArgs>(args?: SelectSubset<T, challengesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenges
     * const challenges = await prisma.challenges.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends challengesUpdateManyArgs>(args: SelectSubset<T, challengesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenges and returns the data updated in the database.
     * @param {challengesUpdateManyAndReturnArgs} args - Arguments to update many Challenges.
     * @example
     * // Update many Challenges
     * const challenges = await prisma.challenges.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenges and only return the `id`
     * const challengesWithIdOnly = await prisma.challenges.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends challengesUpdateManyAndReturnArgs>(args: SelectSubset<T, challengesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenges.
     * @param {challengesUpsertArgs} args - Arguments to update or create a Challenges.
     * @example
     * // Update or create a Challenges
     * const challenges = await prisma.challenges.upsert({
     *   create: {
     *     // ... data to create a Challenges
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenges we want to update
     *   }
     * })
     */
    upsert<T extends challengesUpsertArgs>(args: SelectSubset<T, challengesUpsertArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengesCountArgs} args - Arguments to filter Challenges to count.
     * @example
     * // Count the number of Challenges
     * const count = await prisma.challenges.count({
     *   where: {
     *     // ... the filter for the Challenges we want to count
     *   }
     * })
    **/
    count<T extends challengesCountArgs>(
      args?: Subset<T, challengesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChallengesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChallengesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChallengesAggregateArgs>(args: Subset<T, ChallengesAggregateArgs>): Prisma.PrismaPromise<GetChallengesAggregateType<T>>

    /**
     * Group by Challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challengesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends challengesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: challengesGroupByArgs['orderBy'] }
        : { orderBy?: challengesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, challengesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallengesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the challenges model
   */
  readonly fields: challengesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for challenges.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__challengesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge_submissions<T extends challenges$challenge_submissionsArgs<ExtArgs> = {}>(args?: Subset<T, challenges$challenge_submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends challenges$profileArgs<ExtArgs> = {}>(args?: Subset<T, challenges$profileArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    open_challenges<T extends challenges$open_challengesArgs<ExtArgs> = {}>(args?: Subset<T, challenges$open_challengesArgs<ExtArgs>>): Prisma__open_challengesClient<$Result.GetResult<Prisma.$open_challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    targeted_challenges<T extends challenges$targeted_challengesArgs<ExtArgs> = {}>(args?: Subset<T, challenges$targeted_challengesArgs<ExtArgs>>): Prisma__targeted_challengesClient<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the challenges model
   */
  interface challengesFieldRefs {
    readonly id: FieldRef<"challenges", 'Int'>
    readonly c_target: FieldRef<"challenges", 'c_target_type'>
    readonly c_description: FieldRef<"challenges", 'String'>
    readonly title: FieldRef<"challenges", 'String'>
    readonly time_created: FieldRef<"challenges", 'DateTime'>
    readonly creator_id: FieldRef<"challenges", 'String'>
  }
    

  // Custom InputTypes
  /**
   * challenges findUnique
   */
  export type challengesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * Filter, which challenges to fetch.
     */
    where: challengesWhereUniqueInput
  }

  /**
   * challenges findUniqueOrThrow
   */
  export type challengesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * Filter, which challenges to fetch.
     */
    where: challengesWhereUniqueInput
  }

  /**
   * challenges findFirst
   */
  export type challengesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * Filter, which challenges to fetch.
     */
    where?: challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengesOrderByWithRelationInput | challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenges.
     */
    cursor?: challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenges.
     */
    distinct?: ChallengesScalarFieldEnum | ChallengesScalarFieldEnum[]
  }

  /**
   * challenges findFirstOrThrow
   */
  export type challengesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * Filter, which challenges to fetch.
     */
    where?: challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengesOrderByWithRelationInput | challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenges.
     */
    cursor?: challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenges.
     */
    distinct?: ChallengesScalarFieldEnum | ChallengesScalarFieldEnum[]
  }

  /**
   * challenges findMany
   */
  export type challengesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * Filter, which challenges to fetch.
     */
    where?: challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenges to fetch.
     */
    orderBy?: challengesOrderByWithRelationInput | challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing challenges.
     */
    cursor?: challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenges.
     */
    skip?: number
    distinct?: ChallengesScalarFieldEnum | ChallengesScalarFieldEnum[]
  }

  /**
   * challenges create
   */
  export type challengesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * The data needed to create a challenges.
     */
    data: XOR<challengesCreateInput, challengesUncheckedCreateInput>
  }

  /**
   * challenges createMany
   */
  export type challengesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many challenges.
     */
    data: challengesCreateManyInput | challengesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * challenges createManyAndReturn
   */
  export type challengesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * The data used to create many challenges.
     */
    data: challengesCreateManyInput | challengesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * challenges update
   */
  export type challengesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * The data needed to update a challenges.
     */
    data: XOR<challengesUpdateInput, challengesUncheckedUpdateInput>
    /**
     * Choose, which challenges to update.
     */
    where: challengesWhereUniqueInput
  }

  /**
   * challenges updateMany
   */
  export type challengesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update challenges.
     */
    data: XOR<challengesUpdateManyMutationInput, challengesUncheckedUpdateManyInput>
    /**
     * Filter which challenges to update
     */
    where?: challengesWhereInput
    /**
     * Limit how many challenges to update.
     */
    limit?: number
  }

  /**
   * challenges updateManyAndReturn
   */
  export type challengesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * The data used to update challenges.
     */
    data: XOR<challengesUpdateManyMutationInput, challengesUncheckedUpdateManyInput>
    /**
     * Filter which challenges to update
     */
    where?: challengesWhereInput
    /**
     * Limit how many challenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * challenges upsert
   */
  export type challengesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * The filter to search for the challenges to update in case it exists.
     */
    where: challengesWhereUniqueInput
    /**
     * In case the challenges found by the `where` argument doesn't exist, create a new challenges with this data.
     */
    create: XOR<challengesCreateInput, challengesUncheckedCreateInput>
    /**
     * In case the challenges was found with the provided `where` argument, update it with this data.
     */
    update: XOR<challengesUpdateInput, challengesUncheckedUpdateInput>
  }

  /**
   * challenges delete
   */
  export type challengesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    /**
     * Filter which challenges to delete.
     */
    where: challengesWhereUniqueInput
  }

  /**
   * challenges deleteMany
   */
  export type challengesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenges to delete
     */
    where?: challengesWhereInput
    /**
     * Limit how many challenges to delete.
     */
    limit?: number
  }

  /**
   * challenges.challenge_submissions
   */
  export type challenges$challenge_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    where?: challenge_submissionsWhereInput
    orderBy?: challenge_submissionsOrderByWithRelationInput | challenge_submissionsOrderByWithRelationInput[]
    cursor?: challenge_submissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Challenge_submissionsScalarFieldEnum | Challenge_submissionsScalarFieldEnum[]
  }

  /**
   * challenges.profile
   */
  export type challenges$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    where?: profileWhereInput
  }

  /**
   * challenges.open_challenges
   */
  export type challenges$open_challengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenges
     */
    select?: open_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenges
     */
    omit?: open_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challengesInclude<ExtArgs> | null
    where?: open_challengesWhereInput
  }

  /**
   * challenges.targeted_challenges
   */
  export type challenges$targeted_challengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges
     */
    select?: targeted_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges
     */
    omit?: targeted_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challengesInclude<ExtArgs> | null
    where?: targeted_challengesWhereInput
  }

  /**
   * challenges without action
   */
  export type challengesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
  }


  /**
   * Model open_challenges
   */

  export type AggregateOpen_challenges = {
    _count: Open_challengesCountAggregateOutputType | null
    _avg: Open_challengesAvgAggregateOutputType | null
    _sum: Open_challengesSumAggregateOutputType | null
    _min: Open_challengesMinAggregateOutputType | null
    _max: Open_challengesMaxAggregateOutputType | null
  }

  export type Open_challengesAvgAggregateOutputType = {
    challenge_id: number | null
    submissions: number | null
  }

  export type Open_challengesSumAggregateOutputType = {
    challenge_id: number | null
    submissions: number | null
  }

  export type Open_challengesMinAggregateOutputType = {
    challenge_id: number | null
    submissions: number | null
  }

  export type Open_challengesMaxAggregateOutputType = {
    challenge_id: number | null
    submissions: number | null
  }

  export type Open_challengesCountAggregateOutputType = {
    challenge_id: number
    submissions: number
    _all: number
  }


  export type Open_challengesAvgAggregateInputType = {
    challenge_id?: true
    submissions?: true
  }

  export type Open_challengesSumAggregateInputType = {
    challenge_id?: true
    submissions?: true
  }

  export type Open_challengesMinAggregateInputType = {
    challenge_id?: true
    submissions?: true
  }

  export type Open_challengesMaxAggregateInputType = {
    challenge_id?: true
    submissions?: true
  }

  export type Open_challengesCountAggregateInputType = {
    challenge_id?: true
    submissions?: true
    _all?: true
  }

  export type Open_challengesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which open_challenges to aggregate.
     */
    where?: open_challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of open_challenges to fetch.
     */
    orderBy?: open_challengesOrderByWithRelationInput | open_challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: open_challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` open_challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` open_challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned open_challenges
    **/
    _count?: true | Open_challengesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Open_challengesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Open_challengesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Open_challengesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Open_challengesMaxAggregateInputType
  }

  export type GetOpen_challengesAggregateType<T extends Open_challengesAggregateArgs> = {
        [P in keyof T & keyof AggregateOpen_challenges]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpen_challenges[P]>
      : GetScalarType<T[P], AggregateOpen_challenges[P]>
  }




  export type open_challengesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: open_challengesWhereInput
    orderBy?: open_challengesOrderByWithAggregationInput | open_challengesOrderByWithAggregationInput[]
    by: Open_challengesScalarFieldEnum[] | Open_challengesScalarFieldEnum
    having?: open_challengesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Open_challengesCountAggregateInputType | true
    _avg?: Open_challengesAvgAggregateInputType
    _sum?: Open_challengesSumAggregateInputType
    _min?: Open_challengesMinAggregateInputType
    _max?: Open_challengesMaxAggregateInputType
  }

  export type Open_challengesGroupByOutputType = {
    challenge_id: number
    submissions: number
    _count: Open_challengesCountAggregateOutputType | null
    _avg: Open_challengesAvgAggregateOutputType | null
    _sum: Open_challengesSumAggregateOutputType | null
    _min: Open_challengesMinAggregateOutputType | null
    _max: Open_challengesMaxAggregateOutputType | null
  }

  type GetOpen_challengesGroupByPayload<T extends open_challengesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Open_challengesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Open_challengesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Open_challengesGroupByOutputType[P]>
            : GetScalarType<T[P], Open_challengesGroupByOutputType[P]>
        }
      >
    >


  export type open_challengesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_id?: boolean
    submissions?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["open_challenges"]>

  export type open_challengesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_id?: boolean
    submissions?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["open_challenges"]>

  export type open_challengesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_id?: boolean
    submissions?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["open_challenges"]>

  export type open_challengesSelectScalar = {
    challenge_id?: boolean
    submissions?: boolean
  }

  export type open_challengesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"challenge_id" | "submissions", ExtArgs["result"]["open_challenges"]>
  export type open_challengesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }
  export type open_challengesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }
  export type open_challengesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }

  export type $open_challengesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "open_challenges"
    objects: {
      challenges: Prisma.$challengesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      challenge_id: number
      submissions: number
    }, ExtArgs["result"]["open_challenges"]>
    composites: {}
  }

  type open_challengesGetPayload<S extends boolean | null | undefined | open_challengesDefaultArgs> = $Result.GetResult<Prisma.$open_challengesPayload, S>

  type open_challengesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<open_challengesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Open_challengesCountAggregateInputType | true
    }

  export interface open_challengesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['open_challenges'], meta: { name: 'open_challenges' } }
    /**
     * Find zero or one Open_challenges that matches the filter.
     * @param {open_challengesFindUniqueArgs} args - Arguments to find a Open_challenges
     * @example
     * // Get one Open_challenges
     * const open_challenges = await prisma.open_challenges.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends open_challengesFindUniqueArgs>(args: SelectSubset<T, open_challengesFindUniqueArgs<ExtArgs>>): Prisma__open_challengesClient<$Result.GetResult<Prisma.$open_challengesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Open_challenges that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {open_challengesFindUniqueOrThrowArgs} args - Arguments to find a Open_challenges
     * @example
     * // Get one Open_challenges
     * const open_challenges = await prisma.open_challenges.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends open_challengesFindUniqueOrThrowArgs>(args: SelectSubset<T, open_challengesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__open_challengesClient<$Result.GetResult<Prisma.$open_challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Open_challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {open_challengesFindFirstArgs} args - Arguments to find a Open_challenges
     * @example
     * // Get one Open_challenges
     * const open_challenges = await prisma.open_challenges.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends open_challengesFindFirstArgs>(args?: SelectSubset<T, open_challengesFindFirstArgs<ExtArgs>>): Prisma__open_challengesClient<$Result.GetResult<Prisma.$open_challengesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Open_challenges that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {open_challengesFindFirstOrThrowArgs} args - Arguments to find a Open_challenges
     * @example
     * // Get one Open_challenges
     * const open_challenges = await prisma.open_challenges.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends open_challengesFindFirstOrThrowArgs>(args?: SelectSubset<T, open_challengesFindFirstOrThrowArgs<ExtArgs>>): Prisma__open_challengesClient<$Result.GetResult<Prisma.$open_challengesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Open_challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {open_challengesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Open_challenges
     * const open_challenges = await prisma.open_challenges.findMany()
     * 
     * // Get first 10 Open_challenges
     * const open_challenges = await prisma.open_challenges.findMany({ take: 10 })
     * 
     * // Only select the `challenge_id`
     * const open_challengesWithChallenge_idOnly = await prisma.open_challenges.findMany({ select: { challenge_id: true } })
     * 
     */
    findMany<T extends open_challengesFindManyArgs>(args?: SelectSubset<T, open_challengesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$open_challengesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Open_challenges.
     * @param {open_challengesCreateArgs} args - Arguments to create a Open_challenges.
     * @example
     * // Create one Open_challenges
     * const Open_challenges = await prisma.open_challenges.create({
     *   data: {
     *     // ... data to create a Open_challenges
     *   }
     * })
     * 
     */
    create<T extends open_challengesCreateArgs>(args: SelectSubset<T, open_challengesCreateArgs<ExtArgs>>): Prisma__open_challengesClient<$Result.GetResult<Prisma.$open_challengesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Open_challenges.
     * @param {open_challengesCreateManyArgs} args - Arguments to create many Open_challenges.
     * @example
     * // Create many Open_challenges
     * const open_challenges = await prisma.open_challenges.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends open_challengesCreateManyArgs>(args?: SelectSubset<T, open_challengesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Open_challenges and returns the data saved in the database.
     * @param {open_challengesCreateManyAndReturnArgs} args - Arguments to create many Open_challenges.
     * @example
     * // Create many Open_challenges
     * const open_challenges = await prisma.open_challenges.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Open_challenges and only return the `challenge_id`
     * const open_challengesWithChallenge_idOnly = await prisma.open_challenges.createManyAndReturn({
     *   select: { challenge_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends open_challengesCreateManyAndReturnArgs>(args?: SelectSubset<T, open_challengesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$open_challengesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Open_challenges.
     * @param {open_challengesDeleteArgs} args - Arguments to delete one Open_challenges.
     * @example
     * // Delete one Open_challenges
     * const Open_challenges = await prisma.open_challenges.delete({
     *   where: {
     *     // ... filter to delete one Open_challenges
     *   }
     * })
     * 
     */
    delete<T extends open_challengesDeleteArgs>(args: SelectSubset<T, open_challengesDeleteArgs<ExtArgs>>): Prisma__open_challengesClient<$Result.GetResult<Prisma.$open_challengesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Open_challenges.
     * @param {open_challengesUpdateArgs} args - Arguments to update one Open_challenges.
     * @example
     * // Update one Open_challenges
     * const open_challenges = await prisma.open_challenges.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends open_challengesUpdateArgs>(args: SelectSubset<T, open_challengesUpdateArgs<ExtArgs>>): Prisma__open_challengesClient<$Result.GetResult<Prisma.$open_challengesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Open_challenges.
     * @param {open_challengesDeleteManyArgs} args - Arguments to filter Open_challenges to delete.
     * @example
     * // Delete a few Open_challenges
     * const { count } = await prisma.open_challenges.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends open_challengesDeleteManyArgs>(args?: SelectSubset<T, open_challengesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Open_challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {open_challengesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Open_challenges
     * const open_challenges = await prisma.open_challenges.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends open_challengesUpdateManyArgs>(args: SelectSubset<T, open_challengesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Open_challenges and returns the data updated in the database.
     * @param {open_challengesUpdateManyAndReturnArgs} args - Arguments to update many Open_challenges.
     * @example
     * // Update many Open_challenges
     * const open_challenges = await prisma.open_challenges.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Open_challenges and only return the `challenge_id`
     * const open_challengesWithChallenge_idOnly = await prisma.open_challenges.updateManyAndReturn({
     *   select: { challenge_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends open_challengesUpdateManyAndReturnArgs>(args: SelectSubset<T, open_challengesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$open_challengesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Open_challenges.
     * @param {open_challengesUpsertArgs} args - Arguments to update or create a Open_challenges.
     * @example
     * // Update or create a Open_challenges
     * const open_challenges = await prisma.open_challenges.upsert({
     *   create: {
     *     // ... data to create a Open_challenges
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Open_challenges we want to update
     *   }
     * })
     */
    upsert<T extends open_challengesUpsertArgs>(args: SelectSubset<T, open_challengesUpsertArgs<ExtArgs>>): Prisma__open_challengesClient<$Result.GetResult<Prisma.$open_challengesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Open_challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {open_challengesCountArgs} args - Arguments to filter Open_challenges to count.
     * @example
     * // Count the number of Open_challenges
     * const count = await prisma.open_challenges.count({
     *   where: {
     *     // ... the filter for the Open_challenges we want to count
     *   }
     * })
    **/
    count<T extends open_challengesCountArgs>(
      args?: Subset<T, open_challengesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Open_challengesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Open_challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Open_challengesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Open_challengesAggregateArgs>(args: Subset<T, Open_challengesAggregateArgs>): Prisma.PrismaPromise<GetOpen_challengesAggregateType<T>>

    /**
     * Group by Open_challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {open_challengesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends open_challengesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: open_challengesGroupByArgs['orderBy'] }
        : { orderBy?: open_challengesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, open_challengesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpen_challengesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the open_challenges model
   */
  readonly fields: open_challengesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for open_challenges.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__open_challengesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenges<T extends challengesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, challengesDefaultArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the open_challenges model
   */
  interface open_challengesFieldRefs {
    readonly challenge_id: FieldRef<"open_challenges", 'Int'>
    readonly submissions: FieldRef<"open_challenges", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * open_challenges findUnique
   */
  export type open_challengesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenges
     */
    select?: open_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenges
     */
    omit?: open_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challengesInclude<ExtArgs> | null
    /**
     * Filter, which open_challenges to fetch.
     */
    where: open_challengesWhereUniqueInput
  }

  /**
   * open_challenges findUniqueOrThrow
   */
  export type open_challengesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenges
     */
    select?: open_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenges
     */
    omit?: open_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challengesInclude<ExtArgs> | null
    /**
     * Filter, which open_challenges to fetch.
     */
    where: open_challengesWhereUniqueInput
  }

  /**
   * open_challenges findFirst
   */
  export type open_challengesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenges
     */
    select?: open_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenges
     */
    omit?: open_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challengesInclude<ExtArgs> | null
    /**
     * Filter, which open_challenges to fetch.
     */
    where?: open_challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of open_challenges to fetch.
     */
    orderBy?: open_challengesOrderByWithRelationInput | open_challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for open_challenges.
     */
    cursor?: open_challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` open_challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` open_challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of open_challenges.
     */
    distinct?: Open_challengesScalarFieldEnum | Open_challengesScalarFieldEnum[]
  }

  /**
   * open_challenges findFirstOrThrow
   */
  export type open_challengesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenges
     */
    select?: open_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenges
     */
    omit?: open_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challengesInclude<ExtArgs> | null
    /**
     * Filter, which open_challenges to fetch.
     */
    where?: open_challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of open_challenges to fetch.
     */
    orderBy?: open_challengesOrderByWithRelationInput | open_challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for open_challenges.
     */
    cursor?: open_challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` open_challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` open_challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of open_challenges.
     */
    distinct?: Open_challengesScalarFieldEnum | Open_challengesScalarFieldEnum[]
  }

  /**
   * open_challenges findMany
   */
  export type open_challengesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenges
     */
    select?: open_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenges
     */
    omit?: open_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challengesInclude<ExtArgs> | null
    /**
     * Filter, which open_challenges to fetch.
     */
    where?: open_challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of open_challenges to fetch.
     */
    orderBy?: open_challengesOrderByWithRelationInput | open_challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing open_challenges.
     */
    cursor?: open_challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` open_challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` open_challenges.
     */
    skip?: number
    distinct?: Open_challengesScalarFieldEnum | Open_challengesScalarFieldEnum[]
  }

  /**
   * open_challenges create
   */
  export type open_challengesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenges
     */
    select?: open_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenges
     */
    omit?: open_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challengesInclude<ExtArgs> | null
    /**
     * The data needed to create a open_challenges.
     */
    data: XOR<open_challengesCreateInput, open_challengesUncheckedCreateInput>
  }

  /**
   * open_challenges createMany
   */
  export type open_challengesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many open_challenges.
     */
    data: open_challengesCreateManyInput | open_challengesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * open_challenges createManyAndReturn
   */
  export type open_challengesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenges
     */
    select?: open_challengesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenges
     */
    omit?: open_challengesOmit<ExtArgs> | null
    /**
     * The data used to create many open_challenges.
     */
    data: open_challengesCreateManyInput | open_challengesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challengesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * open_challenges update
   */
  export type open_challengesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenges
     */
    select?: open_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenges
     */
    omit?: open_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challengesInclude<ExtArgs> | null
    /**
     * The data needed to update a open_challenges.
     */
    data: XOR<open_challengesUpdateInput, open_challengesUncheckedUpdateInput>
    /**
     * Choose, which open_challenges to update.
     */
    where: open_challengesWhereUniqueInput
  }

  /**
   * open_challenges updateMany
   */
  export type open_challengesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update open_challenges.
     */
    data: XOR<open_challengesUpdateManyMutationInput, open_challengesUncheckedUpdateManyInput>
    /**
     * Filter which open_challenges to update
     */
    where?: open_challengesWhereInput
    /**
     * Limit how many open_challenges to update.
     */
    limit?: number
  }

  /**
   * open_challenges updateManyAndReturn
   */
  export type open_challengesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenges
     */
    select?: open_challengesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenges
     */
    omit?: open_challengesOmit<ExtArgs> | null
    /**
     * The data used to update open_challenges.
     */
    data: XOR<open_challengesUpdateManyMutationInput, open_challengesUncheckedUpdateManyInput>
    /**
     * Filter which open_challenges to update
     */
    where?: open_challengesWhereInput
    /**
     * Limit how many open_challenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challengesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * open_challenges upsert
   */
  export type open_challengesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenges
     */
    select?: open_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenges
     */
    omit?: open_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challengesInclude<ExtArgs> | null
    /**
     * The filter to search for the open_challenges to update in case it exists.
     */
    where: open_challengesWhereUniqueInput
    /**
     * In case the open_challenges found by the `where` argument doesn't exist, create a new open_challenges with this data.
     */
    create: XOR<open_challengesCreateInput, open_challengesUncheckedCreateInput>
    /**
     * In case the open_challenges was found with the provided `where` argument, update it with this data.
     */
    update: XOR<open_challengesUpdateInput, open_challengesUncheckedUpdateInput>
  }

  /**
   * open_challenges delete
   */
  export type open_challengesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenges
     */
    select?: open_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenges
     */
    omit?: open_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challengesInclude<ExtArgs> | null
    /**
     * Filter which open_challenges to delete.
     */
    where: open_challengesWhereUniqueInput
  }

  /**
   * open_challenges deleteMany
   */
  export type open_challengesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which open_challenges to delete
     */
    where?: open_challengesWhereInput
    /**
     * Limit how many open_challenges to delete.
     */
    limit?: number
  }

  /**
   * open_challenges without action
   */
  export type open_challengesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenges
     */
    select?: open_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenges
     */
    omit?: open_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challengesInclude<ExtArgs> | null
  }


  /**
   * Model targeted_challenges
   */

  export type AggregateTargeted_challenges = {
    _count: Targeted_challengesCountAggregateOutputType | null
    _avg: Targeted_challengesAvgAggregateOutputType | null
    _sum: Targeted_challengesSumAggregateOutputType | null
    _min: Targeted_challengesMinAggregateOutputType | null
    _max: Targeted_challengesMaxAggregateOutputType | null
  }

  export type Targeted_challengesAvgAggregateOutputType = {
    challenge_id: number | null
    value_bet_for: number | null
    value_bet_against: number | null
  }

  export type Targeted_challengesSumAggregateOutputType = {
    challenge_id: number | null
    value_bet_for: number | null
    value_bet_against: number | null
  }

  export type Targeted_challengesMinAggregateOutputType = {
    challenge_id: number | null
    value_bet_for: number | null
    value_bet_against: number | null
    specific_target: string | null
  }

  export type Targeted_challengesMaxAggregateOutputType = {
    challenge_id: number | null
    value_bet_for: number | null
    value_bet_against: number | null
    specific_target: string | null
  }

  export type Targeted_challengesCountAggregateOutputType = {
    challenge_id: number
    value_bet_for: number
    value_bet_against: number
    specific_target: number
    _all: number
  }


  export type Targeted_challengesAvgAggregateInputType = {
    challenge_id?: true
    value_bet_for?: true
    value_bet_against?: true
  }

  export type Targeted_challengesSumAggregateInputType = {
    challenge_id?: true
    value_bet_for?: true
    value_bet_against?: true
  }

  export type Targeted_challengesMinAggregateInputType = {
    challenge_id?: true
    value_bet_for?: true
    value_bet_against?: true
    specific_target?: true
  }

  export type Targeted_challengesMaxAggregateInputType = {
    challenge_id?: true
    value_bet_for?: true
    value_bet_against?: true
    specific_target?: true
  }

  export type Targeted_challengesCountAggregateInputType = {
    challenge_id?: true
    value_bet_for?: true
    value_bet_against?: true
    specific_target?: true
    _all?: true
  }

  export type Targeted_challengesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which targeted_challenges to aggregate.
     */
    where?: targeted_challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges to fetch.
     */
    orderBy?: targeted_challengesOrderByWithRelationInput | targeted_challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: targeted_challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned targeted_challenges
    **/
    _count?: true | Targeted_challengesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Targeted_challengesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Targeted_challengesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Targeted_challengesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Targeted_challengesMaxAggregateInputType
  }

  export type GetTargeted_challengesAggregateType<T extends Targeted_challengesAggregateArgs> = {
        [P in keyof T & keyof AggregateTargeted_challenges]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTargeted_challenges[P]>
      : GetScalarType<T[P], AggregateTargeted_challenges[P]>
  }




  export type targeted_challengesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: targeted_challengesWhereInput
    orderBy?: targeted_challengesOrderByWithAggregationInput | targeted_challengesOrderByWithAggregationInput[]
    by: Targeted_challengesScalarFieldEnum[] | Targeted_challengesScalarFieldEnum
    having?: targeted_challengesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Targeted_challengesCountAggregateInputType | true
    _avg?: Targeted_challengesAvgAggregateInputType
    _sum?: Targeted_challengesSumAggregateInputType
    _min?: Targeted_challengesMinAggregateInputType
    _max?: Targeted_challengesMaxAggregateInputType
  }

  export type Targeted_challengesGroupByOutputType = {
    challenge_id: number
    value_bet_for: number
    value_bet_against: number
    specific_target: string
    _count: Targeted_challengesCountAggregateOutputType | null
    _avg: Targeted_challengesAvgAggregateOutputType | null
    _sum: Targeted_challengesSumAggregateOutputType | null
    _min: Targeted_challengesMinAggregateOutputType | null
    _max: Targeted_challengesMaxAggregateOutputType | null
  }

  type GetTargeted_challengesGroupByPayload<T extends targeted_challengesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Targeted_challengesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Targeted_challengesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Targeted_challengesGroupByOutputType[P]>
            : GetScalarType<T[P], Targeted_challengesGroupByOutputType[P]>
        }
      >
    >


  export type targeted_challengesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_id?: boolean
    value_bet_for?: boolean
    value_bet_against?: boolean
    specific_target?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges"]>

  export type targeted_challengesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_id?: boolean
    value_bet_for?: boolean
    value_bet_against?: boolean
    specific_target?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges"]>

  export type targeted_challengesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_id?: boolean
    value_bet_for?: boolean
    value_bet_against?: boolean
    specific_target?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges"]>

  export type targeted_challengesSelectScalar = {
    challenge_id?: boolean
    value_bet_for?: boolean
    value_bet_against?: boolean
    specific_target?: boolean
  }

  export type targeted_challengesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"challenge_id" | "value_bet_for" | "value_bet_against" | "specific_target", ExtArgs["result"]["targeted_challenges"]>
  export type targeted_challengesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }
  export type targeted_challengesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }
  export type targeted_challengesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }

  export type $targeted_challengesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "targeted_challenges"
    objects: {
      challenges: Prisma.$challengesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      challenge_id: number
      value_bet_for: number
      value_bet_against: number
      specific_target: string
    }, ExtArgs["result"]["targeted_challenges"]>
    composites: {}
  }

  type targeted_challengesGetPayload<S extends boolean | null | undefined | targeted_challengesDefaultArgs> = $Result.GetResult<Prisma.$targeted_challengesPayload, S>

  type targeted_challengesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<targeted_challengesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Targeted_challengesCountAggregateInputType | true
    }

  export interface targeted_challengesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['targeted_challenges'], meta: { name: 'targeted_challenges' } }
    /**
     * Find zero or one Targeted_challenges that matches the filter.
     * @param {targeted_challengesFindUniqueArgs} args - Arguments to find a Targeted_challenges
     * @example
     * // Get one Targeted_challenges
     * const targeted_challenges = await prisma.targeted_challenges.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends targeted_challengesFindUniqueArgs>(args: SelectSubset<T, targeted_challengesFindUniqueArgs<ExtArgs>>): Prisma__targeted_challengesClient<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Targeted_challenges that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {targeted_challengesFindUniqueOrThrowArgs} args - Arguments to find a Targeted_challenges
     * @example
     * // Get one Targeted_challenges
     * const targeted_challenges = await prisma.targeted_challenges.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends targeted_challengesFindUniqueOrThrowArgs>(args: SelectSubset<T, targeted_challengesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__targeted_challengesClient<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Targeted_challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challengesFindFirstArgs} args - Arguments to find a Targeted_challenges
     * @example
     * // Get one Targeted_challenges
     * const targeted_challenges = await prisma.targeted_challenges.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends targeted_challengesFindFirstArgs>(args?: SelectSubset<T, targeted_challengesFindFirstArgs<ExtArgs>>): Prisma__targeted_challengesClient<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Targeted_challenges that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challengesFindFirstOrThrowArgs} args - Arguments to find a Targeted_challenges
     * @example
     * // Get one Targeted_challenges
     * const targeted_challenges = await prisma.targeted_challenges.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends targeted_challengesFindFirstOrThrowArgs>(args?: SelectSubset<T, targeted_challengesFindFirstOrThrowArgs<ExtArgs>>): Prisma__targeted_challengesClient<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Targeted_challenges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challengesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Targeted_challenges
     * const targeted_challenges = await prisma.targeted_challenges.findMany()
     * 
     * // Get first 10 Targeted_challenges
     * const targeted_challenges = await prisma.targeted_challenges.findMany({ take: 10 })
     * 
     * // Only select the `challenge_id`
     * const targeted_challengesWithChallenge_idOnly = await prisma.targeted_challenges.findMany({ select: { challenge_id: true } })
     * 
     */
    findMany<T extends targeted_challengesFindManyArgs>(args?: SelectSubset<T, targeted_challengesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Targeted_challenges.
     * @param {targeted_challengesCreateArgs} args - Arguments to create a Targeted_challenges.
     * @example
     * // Create one Targeted_challenges
     * const Targeted_challenges = await prisma.targeted_challenges.create({
     *   data: {
     *     // ... data to create a Targeted_challenges
     *   }
     * })
     * 
     */
    create<T extends targeted_challengesCreateArgs>(args: SelectSubset<T, targeted_challengesCreateArgs<ExtArgs>>): Prisma__targeted_challengesClient<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Targeted_challenges.
     * @param {targeted_challengesCreateManyArgs} args - Arguments to create many Targeted_challenges.
     * @example
     * // Create many Targeted_challenges
     * const targeted_challenges = await prisma.targeted_challenges.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends targeted_challengesCreateManyArgs>(args?: SelectSubset<T, targeted_challengesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Targeted_challenges and returns the data saved in the database.
     * @param {targeted_challengesCreateManyAndReturnArgs} args - Arguments to create many Targeted_challenges.
     * @example
     * // Create many Targeted_challenges
     * const targeted_challenges = await prisma.targeted_challenges.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Targeted_challenges and only return the `challenge_id`
     * const targeted_challengesWithChallenge_idOnly = await prisma.targeted_challenges.createManyAndReturn({
     *   select: { challenge_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends targeted_challengesCreateManyAndReturnArgs>(args?: SelectSubset<T, targeted_challengesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Targeted_challenges.
     * @param {targeted_challengesDeleteArgs} args - Arguments to delete one Targeted_challenges.
     * @example
     * // Delete one Targeted_challenges
     * const Targeted_challenges = await prisma.targeted_challenges.delete({
     *   where: {
     *     // ... filter to delete one Targeted_challenges
     *   }
     * })
     * 
     */
    delete<T extends targeted_challengesDeleteArgs>(args: SelectSubset<T, targeted_challengesDeleteArgs<ExtArgs>>): Prisma__targeted_challengesClient<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Targeted_challenges.
     * @param {targeted_challengesUpdateArgs} args - Arguments to update one Targeted_challenges.
     * @example
     * // Update one Targeted_challenges
     * const targeted_challenges = await prisma.targeted_challenges.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends targeted_challengesUpdateArgs>(args: SelectSubset<T, targeted_challengesUpdateArgs<ExtArgs>>): Prisma__targeted_challengesClient<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Targeted_challenges.
     * @param {targeted_challengesDeleteManyArgs} args - Arguments to filter Targeted_challenges to delete.
     * @example
     * // Delete a few Targeted_challenges
     * const { count } = await prisma.targeted_challenges.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends targeted_challengesDeleteManyArgs>(args?: SelectSubset<T, targeted_challengesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Targeted_challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challengesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Targeted_challenges
     * const targeted_challenges = await prisma.targeted_challenges.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends targeted_challengesUpdateManyArgs>(args: SelectSubset<T, targeted_challengesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Targeted_challenges and returns the data updated in the database.
     * @param {targeted_challengesUpdateManyAndReturnArgs} args - Arguments to update many Targeted_challenges.
     * @example
     * // Update many Targeted_challenges
     * const targeted_challenges = await prisma.targeted_challenges.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Targeted_challenges and only return the `challenge_id`
     * const targeted_challengesWithChallenge_idOnly = await prisma.targeted_challenges.updateManyAndReturn({
     *   select: { challenge_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends targeted_challengesUpdateManyAndReturnArgs>(args: SelectSubset<T, targeted_challengesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Targeted_challenges.
     * @param {targeted_challengesUpsertArgs} args - Arguments to update or create a Targeted_challenges.
     * @example
     * // Update or create a Targeted_challenges
     * const targeted_challenges = await prisma.targeted_challenges.upsert({
     *   create: {
     *     // ... data to create a Targeted_challenges
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Targeted_challenges we want to update
     *   }
     * })
     */
    upsert<T extends targeted_challengesUpsertArgs>(args: SelectSubset<T, targeted_challengesUpsertArgs<ExtArgs>>): Prisma__targeted_challengesClient<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Targeted_challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challengesCountArgs} args - Arguments to filter Targeted_challenges to count.
     * @example
     * // Count the number of Targeted_challenges
     * const count = await prisma.targeted_challenges.count({
     *   where: {
     *     // ... the filter for the Targeted_challenges we want to count
     *   }
     * })
    **/
    count<T extends targeted_challengesCountArgs>(
      args?: Subset<T, targeted_challengesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Targeted_challengesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Targeted_challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Targeted_challengesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Targeted_challengesAggregateArgs>(args: Subset<T, Targeted_challengesAggregateArgs>): Prisma.PrismaPromise<GetTargeted_challengesAggregateType<T>>

    /**
     * Group by Targeted_challenges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challengesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends targeted_challengesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: targeted_challengesGroupByArgs['orderBy'] }
        : { orderBy?: targeted_challengesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, targeted_challengesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTargeted_challengesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the targeted_challenges model
   */
  readonly fields: targeted_challengesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for targeted_challenges.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__targeted_challengesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenges<T extends challengesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, challengesDefaultArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the targeted_challenges model
   */
  interface targeted_challengesFieldRefs {
    readonly challenge_id: FieldRef<"targeted_challenges", 'Int'>
    readonly value_bet_for: FieldRef<"targeted_challenges", 'Int'>
    readonly value_bet_against: FieldRef<"targeted_challenges", 'Int'>
    readonly specific_target: FieldRef<"targeted_challenges", 'String'>
  }
    

  // Custom InputTypes
  /**
   * targeted_challenges findUnique
   */
  export type targeted_challengesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges
     */
    select?: targeted_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges
     */
    omit?: targeted_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challengesInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges to fetch.
     */
    where: targeted_challengesWhereUniqueInput
  }

  /**
   * targeted_challenges findUniqueOrThrow
   */
  export type targeted_challengesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges
     */
    select?: targeted_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges
     */
    omit?: targeted_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challengesInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges to fetch.
     */
    where: targeted_challengesWhereUniqueInput
  }

  /**
   * targeted_challenges findFirst
   */
  export type targeted_challengesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges
     */
    select?: targeted_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges
     */
    omit?: targeted_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challengesInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges to fetch.
     */
    where?: targeted_challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges to fetch.
     */
    orderBy?: targeted_challengesOrderByWithRelationInput | targeted_challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for targeted_challenges.
     */
    cursor?: targeted_challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of targeted_challenges.
     */
    distinct?: Targeted_challengesScalarFieldEnum | Targeted_challengesScalarFieldEnum[]
  }

  /**
   * targeted_challenges findFirstOrThrow
   */
  export type targeted_challengesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges
     */
    select?: targeted_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges
     */
    omit?: targeted_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challengesInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges to fetch.
     */
    where?: targeted_challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges to fetch.
     */
    orderBy?: targeted_challengesOrderByWithRelationInput | targeted_challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for targeted_challenges.
     */
    cursor?: targeted_challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of targeted_challenges.
     */
    distinct?: Targeted_challengesScalarFieldEnum | Targeted_challengesScalarFieldEnum[]
  }

  /**
   * targeted_challenges findMany
   */
  export type targeted_challengesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges
     */
    select?: targeted_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges
     */
    omit?: targeted_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challengesInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges to fetch.
     */
    where?: targeted_challengesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges to fetch.
     */
    orderBy?: targeted_challengesOrderByWithRelationInput | targeted_challengesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing targeted_challenges.
     */
    cursor?: targeted_challengesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges.
     */
    skip?: number
    distinct?: Targeted_challengesScalarFieldEnum | Targeted_challengesScalarFieldEnum[]
  }

  /**
   * targeted_challenges create
   */
  export type targeted_challengesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges
     */
    select?: targeted_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges
     */
    omit?: targeted_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challengesInclude<ExtArgs> | null
    /**
     * The data needed to create a targeted_challenges.
     */
    data: XOR<targeted_challengesCreateInput, targeted_challengesUncheckedCreateInput>
  }

  /**
   * targeted_challenges createMany
   */
  export type targeted_challengesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many targeted_challenges.
     */
    data: targeted_challengesCreateManyInput | targeted_challengesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * targeted_challenges createManyAndReturn
   */
  export type targeted_challengesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges
     */
    select?: targeted_challengesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges
     */
    omit?: targeted_challengesOmit<ExtArgs> | null
    /**
     * The data used to create many targeted_challenges.
     */
    data: targeted_challengesCreateManyInput | targeted_challengesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challengesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * targeted_challenges update
   */
  export type targeted_challengesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges
     */
    select?: targeted_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges
     */
    omit?: targeted_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challengesInclude<ExtArgs> | null
    /**
     * The data needed to update a targeted_challenges.
     */
    data: XOR<targeted_challengesUpdateInput, targeted_challengesUncheckedUpdateInput>
    /**
     * Choose, which targeted_challenges to update.
     */
    where: targeted_challengesWhereUniqueInput
  }

  /**
   * targeted_challenges updateMany
   */
  export type targeted_challengesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update targeted_challenges.
     */
    data: XOR<targeted_challengesUpdateManyMutationInput, targeted_challengesUncheckedUpdateManyInput>
    /**
     * Filter which targeted_challenges to update
     */
    where?: targeted_challengesWhereInput
    /**
     * Limit how many targeted_challenges to update.
     */
    limit?: number
  }

  /**
   * targeted_challenges updateManyAndReturn
   */
  export type targeted_challengesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges
     */
    select?: targeted_challengesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges
     */
    omit?: targeted_challengesOmit<ExtArgs> | null
    /**
     * The data used to update targeted_challenges.
     */
    data: XOR<targeted_challengesUpdateManyMutationInput, targeted_challengesUncheckedUpdateManyInput>
    /**
     * Filter which targeted_challenges to update
     */
    where?: targeted_challengesWhereInput
    /**
     * Limit how many targeted_challenges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challengesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * targeted_challenges upsert
   */
  export type targeted_challengesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges
     */
    select?: targeted_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges
     */
    omit?: targeted_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challengesInclude<ExtArgs> | null
    /**
     * The filter to search for the targeted_challenges to update in case it exists.
     */
    where: targeted_challengesWhereUniqueInput
    /**
     * In case the targeted_challenges found by the `where` argument doesn't exist, create a new targeted_challenges with this data.
     */
    create: XOR<targeted_challengesCreateInput, targeted_challengesUncheckedCreateInput>
    /**
     * In case the targeted_challenges was found with the provided `where` argument, update it with this data.
     */
    update: XOR<targeted_challengesUpdateInput, targeted_challengesUncheckedUpdateInput>
  }

  /**
   * targeted_challenges delete
   */
  export type targeted_challengesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges
     */
    select?: targeted_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges
     */
    omit?: targeted_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challengesInclude<ExtArgs> | null
    /**
     * Filter which targeted_challenges to delete.
     */
    where: targeted_challengesWhereUniqueInput
  }

  /**
   * targeted_challenges deleteMany
   */
  export type targeted_challengesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which targeted_challenges to delete
     */
    where?: targeted_challengesWhereInput
    /**
     * Limit how many targeted_challenges to delete.
     */
    limit?: number
  }

  /**
   * targeted_challenges without action
   */
  export type targeted_challengesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges
     */
    select?: targeted_challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges
     */
    omit?: targeted_challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challengesInclude<ExtArgs> | null
  }


  /**
   * Model challenge_submissions
   */

  export type AggregateChallenge_submissions = {
    _count: Challenge_submissionsCountAggregateOutputType | null
    _avg: Challenge_submissionsAvgAggregateOutputType | null
    _sum: Challenge_submissionsSumAggregateOutputType | null
    _min: Challenge_submissionsMinAggregateOutputType | null
    _max: Challenge_submissionsMaxAggregateOutputType | null
  }

  export type Challenge_submissionsAvgAggregateOutputType = {
    id: number | null
    challenge_id: number | null
  }

  export type Challenge_submissionsSumAggregateOutputType = {
    id: number | null
    challenge_id: number | null
  }

  export type Challenge_submissionsMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    challenge_id: number | null
    submission_data: string | null
    time_submitted: Date | null
  }

  export type Challenge_submissionsMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    challenge_id: number | null
    submission_data: string | null
    time_submitted: Date | null
  }

  export type Challenge_submissionsCountAggregateOutputType = {
    id: number
    user_id: number
    challenge_id: number
    submission_data: number
    time_submitted: number
    _all: number
  }


  export type Challenge_submissionsAvgAggregateInputType = {
    id?: true
    challenge_id?: true
  }

  export type Challenge_submissionsSumAggregateInputType = {
    id?: true
    challenge_id?: true
  }

  export type Challenge_submissionsMinAggregateInputType = {
    id?: true
    user_id?: true
    challenge_id?: true
    submission_data?: true
    time_submitted?: true
  }

  export type Challenge_submissionsMaxAggregateInputType = {
    id?: true
    user_id?: true
    challenge_id?: true
    submission_data?: true
    time_submitted?: true
  }

  export type Challenge_submissionsCountAggregateInputType = {
    id?: true
    user_id?: true
    challenge_id?: true
    submission_data?: true
    time_submitted?: true
    _all?: true
  }

  export type Challenge_submissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenge_submissions to aggregate.
     */
    where?: challenge_submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenge_submissions to fetch.
     */
    orderBy?: challenge_submissionsOrderByWithRelationInput | challenge_submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: challenge_submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenge_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenge_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned challenge_submissions
    **/
    _count?: true | Challenge_submissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Challenge_submissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Challenge_submissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Challenge_submissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Challenge_submissionsMaxAggregateInputType
  }

  export type GetChallenge_submissionsAggregateType<T extends Challenge_submissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateChallenge_submissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChallenge_submissions[P]>
      : GetScalarType<T[P], AggregateChallenge_submissions[P]>
  }




  export type challenge_submissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challenge_submissionsWhereInput
    orderBy?: challenge_submissionsOrderByWithAggregationInput | challenge_submissionsOrderByWithAggregationInput[]
    by: Challenge_submissionsScalarFieldEnum[] | Challenge_submissionsScalarFieldEnum
    having?: challenge_submissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Challenge_submissionsCountAggregateInputType | true
    _avg?: Challenge_submissionsAvgAggregateInputType
    _sum?: Challenge_submissionsSumAggregateInputType
    _min?: Challenge_submissionsMinAggregateInputType
    _max?: Challenge_submissionsMaxAggregateInputType
  }

  export type Challenge_submissionsGroupByOutputType = {
    id: number
    user_id: string
    challenge_id: number
    submission_data: string | null
    time_submitted: Date
    _count: Challenge_submissionsCountAggregateOutputType | null
    _avg: Challenge_submissionsAvgAggregateOutputType | null
    _sum: Challenge_submissionsSumAggregateOutputType | null
    _min: Challenge_submissionsMinAggregateOutputType | null
    _max: Challenge_submissionsMaxAggregateOutputType | null
  }

  type GetChallenge_submissionsGroupByPayload<T extends challenge_submissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Challenge_submissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Challenge_submissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Challenge_submissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Challenge_submissionsGroupByOutputType[P]>
        }
      >
    >


  export type challenge_submissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    challenge_id?: boolean
    submission_data?: boolean
    time_submitted?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge_submissions"]>

  export type challenge_submissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    challenge_id?: boolean
    submission_data?: boolean
    time_submitted?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge_submissions"]>

  export type challenge_submissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    challenge_id?: boolean
    submission_data?: boolean
    time_submitted?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["challenge_submissions"]>

  export type challenge_submissionsSelectScalar = {
    id?: boolean
    user_id?: boolean
    challenge_id?: boolean
    submission_data?: boolean
    time_submitted?: boolean
  }

  export type challenge_submissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "challenge_id" | "submission_data" | "time_submitted", ExtArgs["result"]["challenge_submissions"]>
  export type challenge_submissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }
  export type challenge_submissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }
  export type challenge_submissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }

  export type $challenge_submissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "challenge_submissions"
    objects: {
      challenges: Prisma.$challengesPayload<ExtArgs>
      profile: Prisma.$profilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      challenge_id: number
      submission_data: string | null
      time_submitted: Date
    }, ExtArgs["result"]["challenge_submissions"]>
    composites: {}
  }

  type challenge_submissionsGetPayload<S extends boolean | null | undefined | challenge_submissionsDefaultArgs> = $Result.GetResult<Prisma.$challenge_submissionsPayload, S>

  type challenge_submissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<challenge_submissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Challenge_submissionsCountAggregateInputType | true
    }

  export interface challenge_submissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['challenge_submissions'], meta: { name: 'challenge_submissions' } }
    /**
     * Find zero or one Challenge_submissions that matches the filter.
     * @param {challenge_submissionsFindUniqueArgs} args - Arguments to find a Challenge_submissions
     * @example
     * // Get one Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends challenge_submissionsFindUniqueArgs>(args: SelectSubset<T, challenge_submissionsFindUniqueArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Challenge_submissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {challenge_submissionsFindUniqueOrThrowArgs} args - Arguments to find a Challenge_submissions
     * @example
     * // Get one Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends challenge_submissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, challenge_submissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_submissionsFindFirstArgs} args - Arguments to find a Challenge_submissions
     * @example
     * // Get one Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends challenge_submissionsFindFirstArgs>(args?: SelectSubset<T, challenge_submissionsFindFirstArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Challenge_submissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_submissionsFindFirstOrThrowArgs} args - Arguments to find a Challenge_submissions
     * @example
     * // Get one Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends challenge_submissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, challenge_submissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Challenge_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_submissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.findMany()
     * 
     * // Get first 10 Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const challenge_submissionsWithIdOnly = await prisma.challenge_submissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends challenge_submissionsFindManyArgs>(args?: SelectSubset<T, challenge_submissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Challenge_submissions.
     * @param {challenge_submissionsCreateArgs} args - Arguments to create a Challenge_submissions.
     * @example
     * // Create one Challenge_submissions
     * const Challenge_submissions = await prisma.challenge_submissions.create({
     *   data: {
     *     // ... data to create a Challenge_submissions
     *   }
     * })
     * 
     */
    create<T extends challenge_submissionsCreateArgs>(args: SelectSubset<T, challenge_submissionsCreateArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Challenge_submissions.
     * @param {challenge_submissionsCreateManyArgs} args - Arguments to create many Challenge_submissions.
     * @example
     * // Create many Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends challenge_submissionsCreateManyArgs>(args?: SelectSubset<T, challenge_submissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Challenge_submissions and returns the data saved in the database.
     * @param {challenge_submissionsCreateManyAndReturnArgs} args - Arguments to create many Challenge_submissions.
     * @example
     * // Create many Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Challenge_submissions and only return the `id`
     * const challenge_submissionsWithIdOnly = await prisma.challenge_submissions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends challenge_submissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, challenge_submissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Challenge_submissions.
     * @param {challenge_submissionsDeleteArgs} args - Arguments to delete one Challenge_submissions.
     * @example
     * // Delete one Challenge_submissions
     * const Challenge_submissions = await prisma.challenge_submissions.delete({
     *   where: {
     *     // ... filter to delete one Challenge_submissions
     *   }
     * })
     * 
     */
    delete<T extends challenge_submissionsDeleteArgs>(args: SelectSubset<T, challenge_submissionsDeleteArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Challenge_submissions.
     * @param {challenge_submissionsUpdateArgs} args - Arguments to update one Challenge_submissions.
     * @example
     * // Update one Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends challenge_submissionsUpdateArgs>(args: SelectSubset<T, challenge_submissionsUpdateArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Challenge_submissions.
     * @param {challenge_submissionsDeleteManyArgs} args - Arguments to filter Challenge_submissions to delete.
     * @example
     * // Delete a few Challenge_submissions
     * const { count } = await prisma.challenge_submissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends challenge_submissionsDeleteManyArgs>(args?: SelectSubset<T, challenge_submissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenge_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_submissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends challenge_submissionsUpdateManyArgs>(args: SelectSubset<T, challenge_submissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Challenge_submissions and returns the data updated in the database.
     * @param {challenge_submissionsUpdateManyAndReturnArgs} args - Arguments to update many Challenge_submissions.
     * @example
     * // Update many Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Challenge_submissions and only return the `id`
     * const challenge_submissionsWithIdOnly = await prisma.challenge_submissions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends challenge_submissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, challenge_submissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Challenge_submissions.
     * @param {challenge_submissionsUpsertArgs} args - Arguments to update or create a Challenge_submissions.
     * @example
     * // Update or create a Challenge_submissions
     * const challenge_submissions = await prisma.challenge_submissions.upsert({
     *   create: {
     *     // ... data to create a Challenge_submissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Challenge_submissions we want to update
     *   }
     * })
     */
    upsert<T extends challenge_submissionsUpsertArgs>(args: SelectSubset<T, challenge_submissionsUpsertArgs<ExtArgs>>): Prisma__challenge_submissionsClient<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Challenge_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_submissionsCountArgs} args - Arguments to filter Challenge_submissions to count.
     * @example
     * // Count the number of Challenge_submissions
     * const count = await prisma.challenge_submissions.count({
     *   where: {
     *     // ... the filter for the Challenge_submissions we want to count
     *   }
     * })
    **/
    count<T extends challenge_submissionsCountArgs>(
      args?: Subset<T, challenge_submissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Challenge_submissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Challenge_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Challenge_submissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Challenge_submissionsAggregateArgs>(args: Subset<T, Challenge_submissionsAggregateArgs>): Prisma.PrismaPromise<GetChallenge_submissionsAggregateType<T>>

    /**
     * Group by Challenge_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {challenge_submissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends challenge_submissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: challenge_submissionsGroupByArgs['orderBy'] }
        : { orderBy?: challenge_submissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, challenge_submissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChallenge_submissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the challenge_submissions model
   */
  readonly fields: challenge_submissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for challenge_submissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__challenge_submissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenges<T extends challengesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, challengesDefaultArgs<ExtArgs>>): Prisma__challengesClient<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profile<T extends profileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, profileDefaultArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the challenge_submissions model
   */
  interface challenge_submissionsFieldRefs {
    readonly id: FieldRef<"challenge_submissions", 'Int'>
    readonly user_id: FieldRef<"challenge_submissions", 'String'>
    readonly challenge_id: FieldRef<"challenge_submissions", 'Int'>
    readonly submission_data: FieldRef<"challenge_submissions", 'String'>
    readonly time_submitted: FieldRef<"challenge_submissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * challenge_submissions findUnique
   */
  export type challenge_submissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which challenge_submissions to fetch.
     */
    where: challenge_submissionsWhereUniqueInput
  }

  /**
   * challenge_submissions findUniqueOrThrow
   */
  export type challenge_submissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which challenge_submissions to fetch.
     */
    where: challenge_submissionsWhereUniqueInput
  }

  /**
   * challenge_submissions findFirst
   */
  export type challenge_submissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which challenge_submissions to fetch.
     */
    where?: challenge_submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenge_submissions to fetch.
     */
    orderBy?: challenge_submissionsOrderByWithRelationInput | challenge_submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenge_submissions.
     */
    cursor?: challenge_submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenge_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenge_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenge_submissions.
     */
    distinct?: Challenge_submissionsScalarFieldEnum | Challenge_submissionsScalarFieldEnum[]
  }

  /**
   * challenge_submissions findFirstOrThrow
   */
  export type challenge_submissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which challenge_submissions to fetch.
     */
    where?: challenge_submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenge_submissions to fetch.
     */
    orderBy?: challenge_submissionsOrderByWithRelationInput | challenge_submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for challenge_submissions.
     */
    cursor?: challenge_submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenge_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenge_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of challenge_submissions.
     */
    distinct?: Challenge_submissionsScalarFieldEnum | Challenge_submissionsScalarFieldEnum[]
  }

  /**
   * challenge_submissions findMany
   */
  export type challenge_submissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which challenge_submissions to fetch.
     */
    where?: challenge_submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of challenge_submissions to fetch.
     */
    orderBy?: challenge_submissionsOrderByWithRelationInput | challenge_submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing challenge_submissions.
     */
    cursor?: challenge_submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` challenge_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` challenge_submissions.
     */
    skip?: number
    distinct?: Challenge_submissionsScalarFieldEnum | Challenge_submissionsScalarFieldEnum[]
  }

  /**
   * challenge_submissions create
   */
  export type challenge_submissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a challenge_submissions.
     */
    data: XOR<challenge_submissionsCreateInput, challenge_submissionsUncheckedCreateInput>
  }

  /**
   * challenge_submissions createMany
   */
  export type challenge_submissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many challenge_submissions.
     */
    data: challenge_submissionsCreateManyInput | challenge_submissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * challenge_submissions createManyAndReturn
   */
  export type challenge_submissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * The data used to create many challenge_submissions.
     */
    data: challenge_submissionsCreateManyInput | challenge_submissionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * challenge_submissions update
   */
  export type challenge_submissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a challenge_submissions.
     */
    data: XOR<challenge_submissionsUpdateInput, challenge_submissionsUncheckedUpdateInput>
    /**
     * Choose, which challenge_submissions to update.
     */
    where: challenge_submissionsWhereUniqueInput
  }

  /**
   * challenge_submissions updateMany
   */
  export type challenge_submissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update challenge_submissions.
     */
    data: XOR<challenge_submissionsUpdateManyMutationInput, challenge_submissionsUncheckedUpdateManyInput>
    /**
     * Filter which challenge_submissions to update
     */
    where?: challenge_submissionsWhereInput
    /**
     * Limit how many challenge_submissions to update.
     */
    limit?: number
  }

  /**
   * challenge_submissions updateManyAndReturn
   */
  export type challenge_submissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * The data used to update challenge_submissions.
     */
    data: XOR<challenge_submissionsUpdateManyMutationInput, challenge_submissionsUncheckedUpdateManyInput>
    /**
     * Filter which challenge_submissions to update
     */
    where?: challenge_submissionsWhereInput
    /**
     * Limit how many challenge_submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * challenge_submissions upsert
   */
  export type challenge_submissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the challenge_submissions to update in case it exists.
     */
    where: challenge_submissionsWhereUniqueInput
    /**
     * In case the challenge_submissions found by the `where` argument doesn't exist, create a new challenge_submissions with this data.
     */
    create: XOR<challenge_submissionsCreateInput, challenge_submissionsUncheckedCreateInput>
    /**
     * In case the challenge_submissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<challenge_submissionsUpdateInput, challenge_submissionsUncheckedUpdateInput>
  }

  /**
   * challenge_submissions delete
   */
  export type challenge_submissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter which challenge_submissions to delete.
     */
    where: challenge_submissionsWhereUniqueInput
  }

  /**
   * challenge_submissions deleteMany
   */
  export type challenge_submissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which challenge_submissions to delete
     */
    where?: challenge_submissionsWhereInput
    /**
     * Limit how many challenge_submissions to delete.
     */
    limit?: number
  }

  /**
   * challenge_submissions without action
   */
  export type challenge_submissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
  }


  /**
   * Model profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    coins: number | null
  }

  export type ProfileSumAggregateOutputType = {
    coins: number | null
  }

  export type ProfileMinAggregateOutputType = {
    profile_id: string | null
    first_name: string | null
    last_name: string | null
    coins: number | null
    phone_number: string | null
    email: string | null
    date_of_birth: Date | null
    gender: $Enums.gender_type | null
  }

  export type ProfileMaxAggregateOutputType = {
    profile_id: string | null
    first_name: string | null
    last_name: string | null
    coins: number | null
    phone_number: string | null
    email: string | null
    date_of_birth: Date | null
    gender: $Enums.gender_type | null
  }

  export type ProfileCountAggregateOutputType = {
    profile_id: number
    first_name: number
    last_name: number
    coins: number
    phone_number: number
    email: number
    date_of_birth: number
    gender: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    coins?: true
  }

  export type ProfileSumAggregateInputType = {
    coins?: true
  }

  export type ProfileMinAggregateInputType = {
    profile_id?: true
    first_name?: true
    last_name?: true
    coins?: true
    phone_number?: true
    email?: true
    date_of_birth?: true
    gender?: true
  }

  export type ProfileMaxAggregateInputType = {
    profile_id?: true
    first_name?: true
    last_name?: true
    coins?: true
    phone_number?: true
    email?: true
    date_of_birth?: true
    gender?: true
  }

  export type ProfileCountAggregateInputType = {
    profile_id?: true
    first_name?: true
    last_name?: true
    coins?: true
    phone_number?: true
    email?: true
    date_of_birth?: true
    gender?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profile to aggregate.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type profileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profileWhereInput
    orderBy?: profileOrderByWithAggregationInput | profileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: profileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    profile_id: string
    first_name: string
    last_name: string
    coins: number
    phone_number: string
    email: string
    date_of_birth: Date
    gender: $Enums.gender_type
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends profileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type profileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    first_name?: boolean
    last_name?: boolean
    coins?: boolean
    phone_number?: boolean
    email?: boolean
    date_of_birth?: boolean
    gender?: boolean
    challenge_submissions?: boolean | profile$challenge_submissionsArgs<ExtArgs>
    challenges?: boolean | profile$challengesArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type profileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    first_name?: boolean
    last_name?: boolean
    coins?: boolean
    phone_number?: boolean
    email?: boolean
    date_of_birth?: boolean
    gender?: boolean
  }, ExtArgs["result"]["profile"]>

  export type profileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    profile_id?: boolean
    first_name?: boolean
    last_name?: boolean
    coins?: boolean
    phone_number?: boolean
    email?: boolean
    date_of_birth?: boolean
    gender?: boolean
  }, ExtArgs["result"]["profile"]>

  export type profileSelectScalar = {
    profile_id?: boolean
    first_name?: boolean
    last_name?: boolean
    coins?: boolean
    phone_number?: boolean
    email?: boolean
    date_of_birth?: boolean
    gender?: boolean
  }

  export type profileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"profile_id" | "first_name" | "last_name" | "coins" | "phone_number" | "email" | "date_of_birth" | "gender", ExtArgs["result"]["profile"]>
  export type profileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenge_submissions?: boolean | profile$challenge_submissionsArgs<ExtArgs>
    challenges?: boolean | profile$challengesArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type profileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type profileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $profilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profile"
    objects: {
      challenge_submissions: Prisma.$challenge_submissionsPayload<ExtArgs>[]
      challenges: Prisma.$challengesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      profile_id: string
      first_name: string
      last_name: string
      coins: number
      phone_number: string
      email: string
      date_of_birth: Date
      gender: $Enums.gender_type
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type profileGetPayload<S extends boolean | null | undefined | profileDefaultArgs> = $Result.GetResult<Prisma.$profilePayload, S>

  type profileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface profileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profile'], meta: { name: 'profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {profileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profileFindUniqueArgs>(args: SelectSubset<T, profileFindUniqueArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profileFindUniqueOrThrowArgs>(args: SelectSubset<T, profileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profileFindFirstArgs>(args?: SelectSubset<T, profileFindFirstArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profileFindFirstOrThrowArgs>(args?: SelectSubset<T, profileFindFirstOrThrowArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `profile_id`
     * const profileWithProfile_idOnly = await prisma.profile.findMany({ select: { profile_id: true } })
     * 
     */
    findMany<T extends profileFindManyArgs>(args?: SelectSubset<T, profileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {profileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends profileCreateArgs>(args: SelectSubset<T, profileCreateArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {profileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profileCreateManyArgs>(args?: SelectSubset<T, profileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {profileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `profile_id`
     * const profileWithProfile_idOnly = await prisma.profile.createManyAndReturn({
     *   select: { profile_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profileCreateManyAndReturnArgs>(args?: SelectSubset<T, profileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {profileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends profileDeleteArgs>(args: SelectSubset<T, profileDeleteArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {profileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profileUpdateArgs>(args: SelectSubset<T, profileUpdateArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {profileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profileDeleteManyArgs>(args?: SelectSubset<T, profileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profileUpdateManyArgs>(args: SelectSubset<T, profileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {profileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `profile_id`
     * const profileWithProfile_idOnly = await prisma.profile.updateManyAndReturn({
     *   select: { profile_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends profileUpdateManyAndReturnArgs>(args: SelectSubset<T, profileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {profileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends profileUpsertArgs>(args: SelectSubset<T, profileUpsertArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profileCountArgs>(
      args?: Subset<T, profileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends profileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profileGroupByArgs['orderBy'] }
        : { orderBy?: profileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, profileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profile model
   */
  readonly fields: profileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    challenge_submissions<T extends profile$challenge_submissionsArgs<ExtArgs> = {}>(args?: Subset<T, profile$challenge_submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challenge_submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    challenges<T extends profile$challengesArgs<ExtArgs> = {}>(args?: Subset<T, profile$challengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the profile model
   */
  interface profileFieldRefs {
    readonly profile_id: FieldRef<"profile", 'String'>
    readonly first_name: FieldRef<"profile", 'String'>
    readonly last_name: FieldRef<"profile", 'String'>
    readonly coins: FieldRef<"profile", 'Int'>
    readonly phone_number: FieldRef<"profile", 'String'>
    readonly email: FieldRef<"profile", 'String'>
    readonly date_of_birth: FieldRef<"profile", 'DateTime'>
    readonly gender: FieldRef<"profile", 'gender_type'>
  }
    

  // Custom InputTypes
  /**
   * profile findUnique
   */
  export type profileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile findUniqueOrThrow
   */
  export type profileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile findFirst
   */
  export type profileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * profile findFirstOrThrow
   */
  export type profileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profile to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * profile findMany
   */
  export type profileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profileOrderByWithRelationInput | profileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * profile create
   */
  export type profileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * The data needed to create a profile.
     */
    data: XOR<profileCreateInput, profileUncheckedCreateInput>
  }

  /**
   * profile createMany
   */
  export type profileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profileCreateManyInput | profileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profile createManyAndReturn
   */
  export type profileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * The data used to create many profiles.
     */
    data: profileCreateManyInput | profileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profile update
   */
  export type profileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * The data needed to update a profile.
     */
    data: XOR<profileUpdateInput, profileUncheckedUpdateInput>
    /**
     * Choose, which profile to update.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile updateMany
   */
  export type profileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profileWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profile updateManyAndReturn
   */
  export type profileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * The data used to update profiles.
     */
    data: XOR<profileUpdateManyMutationInput, profileUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profileWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profile upsert
   */
  export type profileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * The filter to search for the profile to update in case it exists.
     */
    where: profileWhereUniqueInput
    /**
     * In case the profile found by the `where` argument doesn't exist, create a new profile with this data.
     */
    create: XOR<profileCreateInput, profileUncheckedCreateInput>
    /**
     * In case the profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profileUpdateInput, profileUncheckedUpdateInput>
  }

  /**
   * profile delete
   */
  export type profileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
    /**
     * Filter which profile to delete.
     */
    where: profileWhereUniqueInput
  }

  /**
   * profile deleteMany
   */
  export type profileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profileWhereInput
    /**
     * Limit how many profiles to delete.
     */
    limit?: number
  }

  /**
   * profile.challenge_submissions
   */
  export type profile$challenge_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenge_submissions
     */
    select?: challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenge_submissions
     */
    omit?: challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challenge_submissionsInclude<ExtArgs> | null
    where?: challenge_submissionsWhereInput
    orderBy?: challenge_submissionsOrderByWithRelationInput | challenge_submissionsOrderByWithRelationInput[]
    cursor?: challenge_submissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Challenge_submissionsScalarFieldEnum | Challenge_submissionsScalarFieldEnum[]
  }

  /**
   * profile.challenges
   */
  export type profile$challengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the challenges
     */
    select?: challengesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the challenges
     */
    omit?: challengesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: challengesInclude<ExtArgs> | null
    where?: challengesWhereInput
    orderBy?: challengesOrderByWithRelationInput | challengesOrderByWithRelationInput[]
    cursor?: challengesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChallengesScalarFieldEnum | ChallengesScalarFieldEnum[]
  }

  /**
   * profile without action
   */
  export type profileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profile
     */
    select?: profileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profile
     */
    omit?: profileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profileInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ChallengesScalarFieldEnum: {
    id: 'id',
    c_target: 'c_target',
    c_description: 'c_description',
    title: 'title',
    time_created: 'time_created',
    creator_id: 'creator_id'
  };

  export type ChallengesScalarFieldEnum = (typeof ChallengesScalarFieldEnum)[keyof typeof ChallengesScalarFieldEnum]


  export const Open_challengesScalarFieldEnum: {
    challenge_id: 'challenge_id',
    submissions: 'submissions'
  };

  export type Open_challengesScalarFieldEnum = (typeof Open_challengesScalarFieldEnum)[keyof typeof Open_challengesScalarFieldEnum]


  export const Targeted_challengesScalarFieldEnum: {
    challenge_id: 'challenge_id',
    value_bet_for: 'value_bet_for',
    value_bet_against: 'value_bet_against',
    specific_target: 'specific_target'
  };

  export type Targeted_challengesScalarFieldEnum = (typeof Targeted_challengesScalarFieldEnum)[keyof typeof Targeted_challengesScalarFieldEnum]


  export const Challenge_submissionsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    challenge_id: 'challenge_id',
    submission_data: 'submission_data',
    time_submitted: 'time_submitted'
  };

  export type Challenge_submissionsScalarFieldEnum = (typeof Challenge_submissionsScalarFieldEnum)[keyof typeof Challenge_submissionsScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    profile_id: 'profile_id',
    first_name: 'first_name',
    last_name: 'last_name',
    coins: 'coins',
    phone_number: 'phone_number',
    email: 'email',
    date_of_birth: 'date_of_birth',
    gender: 'gender'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'c_target_type'
   */
  export type Enumc_target_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'c_target_type'>
    


  /**
   * Reference to a field of type 'c_target_type[]'
   */
  export type ListEnumc_target_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'c_target_type[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'gender_type'
   */
  export type Enumgender_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender_type'>
    


  /**
   * Reference to a field of type 'gender_type[]'
   */
  export type ListEnumgender_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender_type[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type challengesWhereInput = {
    AND?: challengesWhereInput | challengesWhereInput[]
    OR?: challengesWhereInput[]
    NOT?: challengesWhereInput | challengesWhereInput[]
    id?: IntFilter<"challenges"> | number
    c_target?: Enumc_target_typeFilter<"challenges"> | $Enums.c_target_type
    c_description?: StringFilter<"challenges"> | string
    title?: StringFilter<"challenges"> | string
    time_created?: DateTimeFilter<"challenges"> | Date | string
    creator_id?: StringNullableFilter<"challenges"> | string | null
    challenge_submissions?: Challenge_submissionsListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, profileWhereInput> | null
    open_challenges?: XOR<Open_challengesNullableScalarRelationFilter, open_challengesWhereInput> | null
    targeted_challenges?: XOR<Targeted_challengesNullableScalarRelationFilter, targeted_challengesWhereInput> | null
  }

  export type challengesOrderByWithRelationInput = {
    id?: SortOrder
    c_target?: SortOrder
    c_description?: SortOrder
    title?: SortOrder
    time_created?: SortOrder
    creator_id?: SortOrderInput | SortOrder
    challenge_submissions?: challenge_submissionsOrderByRelationAggregateInput
    profile?: profileOrderByWithRelationInput
    open_challenges?: open_challengesOrderByWithRelationInput
    targeted_challenges?: targeted_challengesOrderByWithRelationInput
  }

  export type challengesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: challengesWhereInput | challengesWhereInput[]
    OR?: challengesWhereInput[]
    NOT?: challengesWhereInput | challengesWhereInput[]
    c_target?: Enumc_target_typeFilter<"challenges"> | $Enums.c_target_type
    c_description?: StringFilter<"challenges"> | string
    title?: StringFilter<"challenges"> | string
    time_created?: DateTimeFilter<"challenges"> | Date | string
    creator_id?: StringNullableFilter<"challenges"> | string | null
    challenge_submissions?: Challenge_submissionsListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, profileWhereInput> | null
    open_challenges?: XOR<Open_challengesNullableScalarRelationFilter, open_challengesWhereInput> | null
    targeted_challenges?: XOR<Targeted_challengesNullableScalarRelationFilter, targeted_challengesWhereInput> | null
  }, "id">

  export type challengesOrderByWithAggregationInput = {
    id?: SortOrder
    c_target?: SortOrder
    c_description?: SortOrder
    title?: SortOrder
    time_created?: SortOrder
    creator_id?: SortOrderInput | SortOrder
    _count?: challengesCountOrderByAggregateInput
    _avg?: challengesAvgOrderByAggregateInput
    _max?: challengesMaxOrderByAggregateInput
    _min?: challengesMinOrderByAggregateInput
    _sum?: challengesSumOrderByAggregateInput
  }

  export type challengesScalarWhereWithAggregatesInput = {
    AND?: challengesScalarWhereWithAggregatesInput | challengesScalarWhereWithAggregatesInput[]
    OR?: challengesScalarWhereWithAggregatesInput[]
    NOT?: challengesScalarWhereWithAggregatesInput | challengesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"challenges"> | number
    c_target?: Enumc_target_typeWithAggregatesFilter<"challenges"> | $Enums.c_target_type
    c_description?: StringWithAggregatesFilter<"challenges"> | string
    title?: StringWithAggregatesFilter<"challenges"> | string
    time_created?: DateTimeWithAggregatesFilter<"challenges"> | Date | string
    creator_id?: StringNullableWithAggregatesFilter<"challenges"> | string | null
  }

  export type open_challengesWhereInput = {
    AND?: open_challengesWhereInput | open_challengesWhereInput[]
    OR?: open_challengesWhereInput[]
    NOT?: open_challengesWhereInput | open_challengesWhereInput[]
    challenge_id?: IntFilter<"open_challenges"> | number
    submissions?: IntFilter<"open_challenges"> | number
    challenges?: XOR<ChallengesScalarRelationFilter, challengesWhereInput>
  }

  export type open_challengesOrderByWithRelationInput = {
    challenge_id?: SortOrder
    submissions?: SortOrder
    challenges?: challengesOrderByWithRelationInput
  }

  export type open_challengesWhereUniqueInput = Prisma.AtLeast<{
    challenge_id?: number
    AND?: open_challengesWhereInput | open_challengesWhereInput[]
    OR?: open_challengesWhereInput[]
    NOT?: open_challengesWhereInput | open_challengesWhereInput[]
    submissions?: IntFilter<"open_challenges"> | number
    challenges?: XOR<ChallengesScalarRelationFilter, challengesWhereInput>
  }, "challenge_id">

  export type open_challengesOrderByWithAggregationInput = {
    challenge_id?: SortOrder
    submissions?: SortOrder
    _count?: open_challengesCountOrderByAggregateInput
    _avg?: open_challengesAvgOrderByAggregateInput
    _max?: open_challengesMaxOrderByAggregateInput
    _min?: open_challengesMinOrderByAggregateInput
    _sum?: open_challengesSumOrderByAggregateInput
  }

  export type open_challengesScalarWhereWithAggregatesInput = {
    AND?: open_challengesScalarWhereWithAggregatesInput | open_challengesScalarWhereWithAggregatesInput[]
    OR?: open_challengesScalarWhereWithAggregatesInput[]
    NOT?: open_challengesScalarWhereWithAggregatesInput | open_challengesScalarWhereWithAggregatesInput[]
    challenge_id?: IntWithAggregatesFilter<"open_challenges"> | number
    submissions?: IntWithAggregatesFilter<"open_challenges"> | number
  }

  export type targeted_challengesWhereInput = {
    AND?: targeted_challengesWhereInput | targeted_challengesWhereInput[]
    OR?: targeted_challengesWhereInput[]
    NOT?: targeted_challengesWhereInput | targeted_challengesWhereInput[]
    challenge_id?: IntFilter<"targeted_challenges"> | number
    value_bet_for?: IntFilter<"targeted_challenges"> | number
    value_bet_against?: IntFilter<"targeted_challenges"> | number
    specific_target?: StringFilter<"targeted_challenges"> | string
    challenges?: XOR<ChallengesScalarRelationFilter, challengesWhereInput>
  }

  export type targeted_challengesOrderByWithRelationInput = {
    challenge_id?: SortOrder
    value_bet_for?: SortOrder
    value_bet_against?: SortOrder
    specific_target?: SortOrder
    challenges?: challengesOrderByWithRelationInput
  }

  export type targeted_challengesWhereUniqueInput = Prisma.AtLeast<{
    challenge_id?: number
    AND?: targeted_challengesWhereInput | targeted_challengesWhereInput[]
    OR?: targeted_challengesWhereInput[]
    NOT?: targeted_challengesWhereInput | targeted_challengesWhereInput[]
    value_bet_for?: IntFilter<"targeted_challenges"> | number
    value_bet_against?: IntFilter<"targeted_challenges"> | number
    specific_target?: StringFilter<"targeted_challenges"> | string
    challenges?: XOR<ChallengesScalarRelationFilter, challengesWhereInput>
  }, "challenge_id">

  export type targeted_challengesOrderByWithAggregationInput = {
    challenge_id?: SortOrder
    value_bet_for?: SortOrder
    value_bet_against?: SortOrder
    specific_target?: SortOrder
    _count?: targeted_challengesCountOrderByAggregateInput
    _avg?: targeted_challengesAvgOrderByAggregateInput
    _max?: targeted_challengesMaxOrderByAggregateInput
    _min?: targeted_challengesMinOrderByAggregateInput
    _sum?: targeted_challengesSumOrderByAggregateInput
  }

  export type targeted_challengesScalarWhereWithAggregatesInput = {
    AND?: targeted_challengesScalarWhereWithAggregatesInput | targeted_challengesScalarWhereWithAggregatesInput[]
    OR?: targeted_challengesScalarWhereWithAggregatesInput[]
    NOT?: targeted_challengesScalarWhereWithAggregatesInput | targeted_challengesScalarWhereWithAggregatesInput[]
    challenge_id?: IntWithAggregatesFilter<"targeted_challenges"> | number
    value_bet_for?: IntWithAggregatesFilter<"targeted_challenges"> | number
    value_bet_against?: IntWithAggregatesFilter<"targeted_challenges"> | number
    specific_target?: StringWithAggregatesFilter<"targeted_challenges"> | string
  }

  export type challenge_submissionsWhereInput = {
    AND?: challenge_submissionsWhereInput | challenge_submissionsWhereInput[]
    OR?: challenge_submissionsWhereInput[]
    NOT?: challenge_submissionsWhereInput | challenge_submissionsWhereInput[]
    id?: IntFilter<"challenge_submissions"> | number
    user_id?: StringFilter<"challenge_submissions"> | string
    challenge_id?: IntFilter<"challenge_submissions"> | number
    submission_data?: StringNullableFilter<"challenge_submissions"> | string | null
    time_submitted?: DateTimeFilter<"challenge_submissions"> | Date | string
    challenges?: XOR<ChallengesScalarRelationFilter, challengesWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, profileWhereInput>
  }

  export type challenge_submissionsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    challenge_id?: SortOrder
    submission_data?: SortOrderInput | SortOrder
    time_submitted?: SortOrder
    challenges?: challengesOrderByWithRelationInput
    profile?: profileOrderByWithRelationInput
  }

  export type challenge_submissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id_challenge_id?: challenge_submissionsUser_idChallenge_idCompoundUniqueInput
    AND?: challenge_submissionsWhereInput | challenge_submissionsWhereInput[]
    OR?: challenge_submissionsWhereInput[]
    NOT?: challenge_submissionsWhereInput | challenge_submissionsWhereInput[]
    user_id?: StringFilter<"challenge_submissions"> | string
    challenge_id?: IntFilter<"challenge_submissions"> | number
    submission_data?: StringNullableFilter<"challenge_submissions"> | string | null
    time_submitted?: DateTimeFilter<"challenge_submissions"> | Date | string
    challenges?: XOR<ChallengesScalarRelationFilter, challengesWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, profileWhereInput>
  }, "id" | "user_id_challenge_id">

  export type challenge_submissionsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    challenge_id?: SortOrder
    submission_data?: SortOrderInput | SortOrder
    time_submitted?: SortOrder
    _count?: challenge_submissionsCountOrderByAggregateInput
    _avg?: challenge_submissionsAvgOrderByAggregateInput
    _max?: challenge_submissionsMaxOrderByAggregateInput
    _min?: challenge_submissionsMinOrderByAggregateInput
    _sum?: challenge_submissionsSumOrderByAggregateInput
  }

  export type challenge_submissionsScalarWhereWithAggregatesInput = {
    AND?: challenge_submissionsScalarWhereWithAggregatesInput | challenge_submissionsScalarWhereWithAggregatesInput[]
    OR?: challenge_submissionsScalarWhereWithAggregatesInput[]
    NOT?: challenge_submissionsScalarWhereWithAggregatesInput | challenge_submissionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"challenge_submissions"> | number
    user_id?: StringWithAggregatesFilter<"challenge_submissions"> | string
    challenge_id?: IntWithAggregatesFilter<"challenge_submissions"> | number
    submission_data?: StringNullableWithAggregatesFilter<"challenge_submissions"> | string | null
    time_submitted?: DateTimeWithAggregatesFilter<"challenge_submissions"> | Date | string
  }

  export type profileWhereInput = {
    AND?: profileWhereInput | profileWhereInput[]
    OR?: profileWhereInput[]
    NOT?: profileWhereInput | profileWhereInput[]
    profile_id?: StringFilter<"profile"> | string
    first_name?: StringFilter<"profile"> | string
    last_name?: StringFilter<"profile"> | string
    coins?: IntFilter<"profile"> | number
    phone_number?: StringFilter<"profile"> | string
    email?: StringFilter<"profile"> | string
    date_of_birth?: DateTimeFilter<"profile"> | Date | string
    gender?: Enumgender_typeFilter<"profile"> | $Enums.gender_type
    challenge_submissions?: Challenge_submissionsListRelationFilter
    challenges?: ChallengesListRelationFilter
  }

  export type profileOrderByWithRelationInput = {
    profile_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    coins?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    challenge_submissions?: challenge_submissionsOrderByRelationAggregateInput
    challenges?: challengesOrderByRelationAggregateInput
  }

  export type profileWhereUniqueInput = Prisma.AtLeast<{
    profile_id?: string
    email?: string
    AND?: profileWhereInput | profileWhereInput[]
    OR?: profileWhereInput[]
    NOT?: profileWhereInput | profileWhereInput[]
    first_name?: StringFilter<"profile"> | string
    last_name?: StringFilter<"profile"> | string
    coins?: IntFilter<"profile"> | number
    phone_number?: StringFilter<"profile"> | string
    date_of_birth?: DateTimeFilter<"profile"> | Date | string
    gender?: Enumgender_typeFilter<"profile"> | $Enums.gender_type
    challenge_submissions?: Challenge_submissionsListRelationFilter
    challenges?: ChallengesListRelationFilter
  }, "profile_id" | "email">

  export type profileOrderByWithAggregationInput = {
    profile_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    coins?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
    _count?: profileCountOrderByAggregateInput
    _avg?: profileAvgOrderByAggregateInput
    _max?: profileMaxOrderByAggregateInput
    _min?: profileMinOrderByAggregateInput
    _sum?: profileSumOrderByAggregateInput
  }

  export type profileScalarWhereWithAggregatesInput = {
    AND?: profileScalarWhereWithAggregatesInput | profileScalarWhereWithAggregatesInput[]
    OR?: profileScalarWhereWithAggregatesInput[]
    NOT?: profileScalarWhereWithAggregatesInput | profileScalarWhereWithAggregatesInput[]
    profile_id?: StringWithAggregatesFilter<"profile"> | string
    first_name?: StringWithAggregatesFilter<"profile"> | string
    last_name?: StringWithAggregatesFilter<"profile"> | string
    coins?: IntWithAggregatesFilter<"profile"> | number
    phone_number?: StringWithAggregatesFilter<"profile"> | string
    email?: StringWithAggregatesFilter<"profile"> | string
    date_of_birth?: DateTimeWithAggregatesFilter<"profile"> | Date | string
    gender?: Enumgender_typeWithAggregatesFilter<"profile"> | $Enums.gender_type
  }

  export type challengesCreateInput = {
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
    challenge_submissions?: challenge_submissionsCreateNestedManyWithoutChallengesInput
    profile?: profileCreateNestedOneWithoutChallengesInput
    open_challenges?: open_challengesCreateNestedOneWithoutChallengesInput
    targeted_challenges?: targeted_challengesCreateNestedOneWithoutChallengesInput
  }

  export type challengesUncheckedCreateInput = {
    id?: number
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
    creator_id?: string | null
    challenge_submissions?: challenge_submissionsUncheckedCreateNestedManyWithoutChallengesInput
    open_challenges?: open_challengesUncheckedCreateNestedOneWithoutChallengesInput
    targeted_challenges?: targeted_challengesUncheckedCreateNestedOneWithoutChallengesInput
  }

  export type challengesUpdateInput = {
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge_submissions?: challenge_submissionsUpdateManyWithoutChallengesNestedInput
    profile?: profileUpdateOneWithoutChallengesNestedInput
    open_challenges?: open_challengesUpdateOneWithoutChallengesNestedInput
    targeted_challenges?: targeted_challengesUpdateOneWithoutChallengesNestedInput
  }

  export type challengesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    challenge_submissions?: challenge_submissionsUncheckedUpdateManyWithoutChallengesNestedInput
    open_challenges?: open_challengesUncheckedUpdateOneWithoutChallengesNestedInput
    targeted_challenges?: targeted_challengesUncheckedUpdateOneWithoutChallengesNestedInput
  }

  export type challengesCreateManyInput = {
    id?: number
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
    creator_id?: string | null
  }

  export type challengesUpdateManyMutationInput = {
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type open_challengesCreateInput = {
    submissions?: number
    challenges: challengesCreateNestedOneWithoutOpen_challengesInput
  }

  export type open_challengesUncheckedCreateInput = {
    challenge_id: number
    submissions?: number
  }

  export type open_challengesUpdateInput = {
    submissions?: IntFieldUpdateOperationsInput | number
    challenges?: challengesUpdateOneRequiredWithoutOpen_challengesNestedInput
  }

  export type open_challengesUncheckedUpdateInput = {
    challenge_id?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
  }

  export type open_challengesCreateManyInput = {
    challenge_id: number
    submissions?: number
  }

  export type open_challengesUpdateManyMutationInput = {
    submissions?: IntFieldUpdateOperationsInput | number
  }

  export type open_challengesUncheckedUpdateManyInput = {
    challenge_id?: IntFieldUpdateOperationsInput | number
    submissions?: IntFieldUpdateOperationsInput | number
  }

  export type targeted_challengesCreateInput = {
    value_bet_for: number
    value_bet_against: number
    specific_target: string
    challenges: challengesCreateNestedOneWithoutTargeted_challengesInput
  }

  export type targeted_challengesUncheckedCreateInput = {
    challenge_id: number
    value_bet_for: number
    value_bet_against: number
    specific_target: string
  }

  export type targeted_challengesUpdateInput = {
    value_bet_for?: IntFieldUpdateOperationsInput | number
    value_bet_against?: IntFieldUpdateOperationsInput | number
    specific_target?: StringFieldUpdateOperationsInput | string
    challenges?: challengesUpdateOneRequiredWithoutTargeted_challengesNestedInput
  }

  export type targeted_challengesUncheckedUpdateInput = {
    challenge_id?: IntFieldUpdateOperationsInput | number
    value_bet_for?: IntFieldUpdateOperationsInput | number
    value_bet_against?: IntFieldUpdateOperationsInput | number
    specific_target?: StringFieldUpdateOperationsInput | string
  }

  export type targeted_challengesCreateManyInput = {
    challenge_id: number
    value_bet_for: number
    value_bet_against: number
    specific_target: string
  }

  export type targeted_challengesUpdateManyMutationInput = {
    value_bet_for?: IntFieldUpdateOperationsInput | number
    value_bet_against?: IntFieldUpdateOperationsInput | number
    specific_target?: StringFieldUpdateOperationsInput | string
  }

  export type targeted_challengesUncheckedUpdateManyInput = {
    challenge_id?: IntFieldUpdateOperationsInput | number
    value_bet_for?: IntFieldUpdateOperationsInput | number
    value_bet_against?: IntFieldUpdateOperationsInput | number
    specific_target?: StringFieldUpdateOperationsInput | string
  }

  export type challenge_submissionsCreateInput = {
    submission_data?: string | null
    time_submitted?: Date | string
    challenges: challengesCreateNestedOneWithoutChallenge_submissionsInput
    profile: profileCreateNestedOneWithoutChallenge_submissionsInput
  }

  export type challenge_submissionsUncheckedCreateInput = {
    id?: number
    user_id: string
    challenge_id: number
    submission_data?: string | null
    time_submitted?: Date | string
  }

  export type challenge_submissionsUpdateInput = {
    submission_data?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
    challenges?: challengesUpdateOneRequiredWithoutChallenge_submissionsNestedInput
    profile?: profileUpdateOneRequiredWithoutChallenge_submissionsNestedInput
  }

  export type challenge_submissionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    challenge_id?: IntFieldUpdateOperationsInput | number
    submission_data?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challenge_submissionsCreateManyInput = {
    id?: number
    user_id: string
    challenge_id: number
    submission_data?: string | null
    time_submitted?: Date | string
  }

  export type challenge_submissionsUpdateManyMutationInput = {
    submission_data?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challenge_submissionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    challenge_id?: IntFieldUpdateOperationsInput | number
    submission_data?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type profileCreateInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenge_submissions?: challenge_submissionsCreateNestedManyWithoutProfileInput
    challenges?: challengesCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenge_submissions?: challenge_submissionsUncheckedCreateNestedManyWithoutProfileInput
    challenges?: challengesUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileUpdateInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenge_submissions?: challenge_submissionsUpdateManyWithoutProfileNestedInput
    challenges?: challengesUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenge_submissions?: challenge_submissionsUncheckedUpdateManyWithoutProfileNestedInput
    challenges?: challengesUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type profileCreateManyInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
  }

  export type profileUpdateManyMutationInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
  }

  export type profileUncheckedUpdateManyInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Enumc_target_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.c_target_type | Enumc_target_typeFieldRefInput<$PrismaModel>
    in?: $Enums.c_target_type[] | ListEnumc_target_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.c_target_type[] | ListEnumc_target_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumc_target_typeFilter<$PrismaModel> | $Enums.c_target_type
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type Challenge_submissionsListRelationFilter = {
    every?: challenge_submissionsWhereInput
    some?: challenge_submissionsWhereInput
    none?: challenge_submissionsWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: profileWhereInput | null
    isNot?: profileWhereInput | null
  }

  export type Open_challengesNullableScalarRelationFilter = {
    is?: open_challengesWhereInput | null
    isNot?: open_challengesWhereInput | null
  }

  export type Targeted_challengesNullableScalarRelationFilter = {
    is?: targeted_challengesWhereInput | null
    isNot?: targeted_challengesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type challenge_submissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type challengesCountOrderByAggregateInput = {
    id?: SortOrder
    c_target?: SortOrder
    c_description?: SortOrder
    title?: SortOrder
    time_created?: SortOrder
    creator_id?: SortOrder
  }

  export type challengesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type challengesMaxOrderByAggregateInput = {
    id?: SortOrder
    c_target?: SortOrder
    c_description?: SortOrder
    title?: SortOrder
    time_created?: SortOrder
    creator_id?: SortOrder
  }

  export type challengesMinOrderByAggregateInput = {
    id?: SortOrder
    c_target?: SortOrder
    c_description?: SortOrder
    title?: SortOrder
    time_created?: SortOrder
    creator_id?: SortOrder
  }

  export type challengesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type Enumc_target_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.c_target_type | Enumc_target_typeFieldRefInput<$PrismaModel>
    in?: $Enums.c_target_type[] | ListEnumc_target_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.c_target_type[] | ListEnumc_target_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumc_target_typeWithAggregatesFilter<$PrismaModel> | $Enums.c_target_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumc_target_typeFilter<$PrismaModel>
    _max?: NestedEnumc_target_typeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ChallengesScalarRelationFilter = {
    is?: challengesWhereInput
    isNot?: challengesWhereInput
  }

  export type open_challengesCountOrderByAggregateInput = {
    challenge_id?: SortOrder
    submissions?: SortOrder
  }

  export type open_challengesAvgOrderByAggregateInput = {
    challenge_id?: SortOrder
    submissions?: SortOrder
  }

  export type open_challengesMaxOrderByAggregateInput = {
    challenge_id?: SortOrder
    submissions?: SortOrder
  }

  export type open_challengesMinOrderByAggregateInput = {
    challenge_id?: SortOrder
    submissions?: SortOrder
  }

  export type open_challengesSumOrderByAggregateInput = {
    challenge_id?: SortOrder
    submissions?: SortOrder
  }

  export type targeted_challengesCountOrderByAggregateInput = {
    challenge_id?: SortOrder
    value_bet_for?: SortOrder
    value_bet_against?: SortOrder
    specific_target?: SortOrder
  }

  export type targeted_challengesAvgOrderByAggregateInput = {
    challenge_id?: SortOrder
    value_bet_for?: SortOrder
    value_bet_against?: SortOrder
  }

  export type targeted_challengesMaxOrderByAggregateInput = {
    challenge_id?: SortOrder
    value_bet_for?: SortOrder
    value_bet_against?: SortOrder
    specific_target?: SortOrder
  }

  export type targeted_challengesMinOrderByAggregateInput = {
    challenge_id?: SortOrder
    value_bet_for?: SortOrder
    value_bet_against?: SortOrder
    specific_target?: SortOrder
  }

  export type targeted_challengesSumOrderByAggregateInput = {
    challenge_id?: SortOrder
    value_bet_for?: SortOrder
    value_bet_against?: SortOrder
  }

  export type ProfileScalarRelationFilter = {
    is?: profileWhereInput
    isNot?: profileWhereInput
  }

  export type challenge_submissionsUser_idChallenge_idCompoundUniqueInput = {
    user_id: string
    challenge_id: number
  }

  export type challenge_submissionsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    challenge_id?: SortOrder
    submission_data?: SortOrder
    time_submitted?: SortOrder
  }

  export type challenge_submissionsAvgOrderByAggregateInput = {
    id?: SortOrder
    challenge_id?: SortOrder
  }

  export type challenge_submissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    challenge_id?: SortOrder
    submission_data?: SortOrder
    time_submitted?: SortOrder
  }

  export type challenge_submissionsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    challenge_id?: SortOrder
    submission_data?: SortOrder
    time_submitted?: SortOrder
  }

  export type challenge_submissionsSumOrderByAggregateInput = {
    id?: SortOrder
    challenge_id?: SortOrder
  }

  export type Enumgender_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_type | Enumgender_typeFieldRefInput<$PrismaModel>
    in?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_typeFilter<$PrismaModel> | $Enums.gender_type
  }

  export type ChallengesListRelationFilter = {
    every?: challengesWhereInput
    some?: challengesWhereInput
    none?: challengesWhereInput
  }

  export type challengesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type profileCountOrderByAggregateInput = {
    profile_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    coins?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
  }

  export type profileAvgOrderByAggregateInput = {
    coins?: SortOrder
  }

  export type profileMaxOrderByAggregateInput = {
    profile_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    coins?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
  }

  export type profileMinOrderByAggregateInput = {
    profile_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    coins?: SortOrder
    phone_number?: SortOrder
    email?: SortOrder
    date_of_birth?: SortOrder
    gender?: SortOrder
  }

  export type profileSumOrderByAggregateInput = {
    coins?: SortOrder
  }

  export type Enumgender_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_type | Enumgender_typeFieldRefInput<$PrismaModel>
    in?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_typeWithAggregatesFilter<$PrismaModel> | $Enums.gender_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgender_typeFilter<$PrismaModel>
    _max?: NestedEnumgender_typeFilter<$PrismaModel>
  }

  export type challenge_submissionsCreateNestedManyWithoutChallengesInput = {
    create?: XOR<challenge_submissionsCreateWithoutChallengesInput, challenge_submissionsUncheckedCreateWithoutChallengesInput> | challenge_submissionsCreateWithoutChallengesInput[] | challenge_submissionsUncheckedCreateWithoutChallengesInput[]
    connectOrCreate?: challenge_submissionsCreateOrConnectWithoutChallengesInput | challenge_submissionsCreateOrConnectWithoutChallengesInput[]
    createMany?: challenge_submissionsCreateManyChallengesInputEnvelope
    connect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
  }

  export type profileCreateNestedOneWithoutChallengesInput = {
    create?: XOR<profileCreateWithoutChallengesInput, profileUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: profileCreateOrConnectWithoutChallengesInput
    connect?: profileWhereUniqueInput
  }

  export type open_challengesCreateNestedOneWithoutChallengesInput = {
    create?: XOR<open_challengesCreateWithoutChallengesInput, open_challengesUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: open_challengesCreateOrConnectWithoutChallengesInput
    connect?: open_challengesWhereUniqueInput
  }

  export type targeted_challengesCreateNestedOneWithoutChallengesInput = {
    create?: XOR<targeted_challengesCreateWithoutChallengesInput, targeted_challengesUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: targeted_challengesCreateOrConnectWithoutChallengesInput
    connect?: targeted_challengesWhereUniqueInput
  }

  export type challenge_submissionsUncheckedCreateNestedManyWithoutChallengesInput = {
    create?: XOR<challenge_submissionsCreateWithoutChallengesInput, challenge_submissionsUncheckedCreateWithoutChallengesInput> | challenge_submissionsCreateWithoutChallengesInput[] | challenge_submissionsUncheckedCreateWithoutChallengesInput[]
    connectOrCreate?: challenge_submissionsCreateOrConnectWithoutChallengesInput | challenge_submissionsCreateOrConnectWithoutChallengesInput[]
    createMany?: challenge_submissionsCreateManyChallengesInputEnvelope
    connect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
  }

  export type open_challengesUncheckedCreateNestedOneWithoutChallengesInput = {
    create?: XOR<open_challengesCreateWithoutChallengesInput, open_challengesUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: open_challengesCreateOrConnectWithoutChallengesInput
    connect?: open_challengesWhereUniqueInput
  }

  export type targeted_challengesUncheckedCreateNestedOneWithoutChallengesInput = {
    create?: XOR<targeted_challengesCreateWithoutChallengesInput, targeted_challengesUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: targeted_challengesCreateOrConnectWithoutChallengesInput
    connect?: targeted_challengesWhereUniqueInput
  }

  export type Enumc_target_typeFieldUpdateOperationsInput = {
    set?: $Enums.c_target_type
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type challenge_submissionsUpdateManyWithoutChallengesNestedInput = {
    create?: XOR<challenge_submissionsCreateWithoutChallengesInput, challenge_submissionsUncheckedCreateWithoutChallengesInput> | challenge_submissionsCreateWithoutChallengesInput[] | challenge_submissionsUncheckedCreateWithoutChallengesInput[]
    connectOrCreate?: challenge_submissionsCreateOrConnectWithoutChallengesInput | challenge_submissionsCreateOrConnectWithoutChallengesInput[]
    upsert?: challenge_submissionsUpsertWithWhereUniqueWithoutChallengesInput | challenge_submissionsUpsertWithWhereUniqueWithoutChallengesInput[]
    createMany?: challenge_submissionsCreateManyChallengesInputEnvelope
    set?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    disconnect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    delete?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    connect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    update?: challenge_submissionsUpdateWithWhereUniqueWithoutChallengesInput | challenge_submissionsUpdateWithWhereUniqueWithoutChallengesInput[]
    updateMany?: challenge_submissionsUpdateManyWithWhereWithoutChallengesInput | challenge_submissionsUpdateManyWithWhereWithoutChallengesInput[]
    deleteMany?: challenge_submissionsScalarWhereInput | challenge_submissionsScalarWhereInput[]
  }

  export type profileUpdateOneWithoutChallengesNestedInput = {
    create?: XOR<profileCreateWithoutChallengesInput, profileUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: profileCreateOrConnectWithoutChallengesInput
    upsert?: profileUpsertWithoutChallengesInput
    disconnect?: profileWhereInput | boolean
    delete?: profileWhereInput | boolean
    connect?: profileWhereUniqueInput
    update?: XOR<XOR<profileUpdateToOneWithWhereWithoutChallengesInput, profileUpdateWithoutChallengesInput>, profileUncheckedUpdateWithoutChallengesInput>
  }

  export type open_challengesUpdateOneWithoutChallengesNestedInput = {
    create?: XOR<open_challengesCreateWithoutChallengesInput, open_challengesUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: open_challengesCreateOrConnectWithoutChallengesInput
    upsert?: open_challengesUpsertWithoutChallengesInput
    disconnect?: open_challengesWhereInput | boolean
    delete?: open_challengesWhereInput | boolean
    connect?: open_challengesWhereUniqueInput
    update?: XOR<XOR<open_challengesUpdateToOneWithWhereWithoutChallengesInput, open_challengesUpdateWithoutChallengesInput>, open_challengesUncheckedUpdateWithoutChallengesInput>
  }

  export type targeted_challengesUpdateOneWithoutChallengesNestedInput = {
    create?: XOR<targeted_challengesCreateWithoutChallengesInput, targeted_challengesUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: targeted_challengesCreateOrConnectWithoutChallengesInput
    upsert?: targeted_challengesUpsertWithoutChallengesInput
    disconnect?: targeted_challengesWhereInput | boolean
    delete?: targeted_challengesWhereInput | boolean
    connect?: targeted_challengesWhereUniqueInput
    update?: XOR<XOR<targeted_challengesUpdateToOneWithWhereWithoutChallengesInput, targeted_challengesUpdateWithoutChallengesInput>, targeted_challengesUncheckedUpdateWithoutChallengesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type challenge_submissionsUncheckedUpdateManyWithoutChallengesNestedInput = {
    create?: XOR<challenge_submissionsCreateWithoutChallengesInput, challenge_submissionsUncheckedCreateWithoutChallengesInput> | challenge_submissionsCreateWithoutChallengesInput[] | challenge_submissionsUncheckedCreateWithoutChallengesInput[]
    connectOrCreate?: challenge_submissionsCreateOrConnectWithoutChallengesInput | challenge_submissionsCreateOrConnectWithoutChallengesInput[]
    upsert?: challenge_submissionsUpsertWithWhereUniqueWithoutChallengesInput | challenge_submissionsUpsertWithWhereUniqueWithoutChallengesInput[]
    createMany?: challenge_submissionsCreateManyChallengesInputEnvelope
    set?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    disconnect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    delete?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    connect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    update?: challenge_submissionsUpdateWithWhereUniqueWithoutChallengesInput | challenge_submissionsUpdateWithWhereUniqueWithoutChallengesInput[]
    updateMany?: challenge_submissionsUpdateManyWithWhereWithoutChallengesInput | challenge_submissionsUpdateManyWithWhereWithoutChallengesInput[]
    deleteMany?: challenge_submissionsScalarWhereInput | challenge_submissionsScalarWhereInput[]
  }

  export type open_challengesUncheckedUpdateOneWithoutChallengesNestedInput = {
    create?: XOR<open_challengesCreateWithoutChallengesInput, open_challengesUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: open_challengesCreateOrConnectWithoutChallengesInput
    upsert?: open_challengesUpsertWithoutChallengesInput
    disconnect?: open_challengesWhereInput | boolean
    delete?: open_challengesWhereInput | boolean
    connect?: open_challengesWhereUniqueInput
    update?: XOR<XOR<open_challengesUpdateToOneWithWhereWithoutChallengesInput, open_challengesUpdateWithoutChallengesInput>, open_challengesUncheckedUpdateWithoutChallengesInput>
  }

  export type targeted_challengesUncheckedUpdateOneWithoutChallengesNestedInput = {
    create?: XOR<targeted_challengesCreateWithoutChallengesInput, targeted_challengesUncheckedCreateWithoutChallengesInput>
    connectOrCreate?: targeted_challengesCreateOrConnectWithoutChallengesInput
    upsert?: targeted_challengesUpsertWithoutChallengesInput
    disconnect?: targeted_challengesWhereInput | boolean
    delete?: targeted_challengesWhereInput | boolean
    connect?: targeted_challengesWhereUniqueInput
    update?: XOR<XOR<targeted_challengesUpdateToOneWithWhereWithoutChallengesInput, targeted_challengesUpdateWithoutChallengesInput>, targeted_challengesUncheckedUpdateWithoutChallengesInput>
  }

  export type challengesCreateNestedOneWithoutOpen_challengesInput = {
    create?: XOR<challengesCreateWithoutOpen_challengesInput, challengesUncheckedCreateWithoutOpen_challengesInput>
    connectOrCreate?: challengesCreateOrConnectWithoutOpen_challengesInput
    connect?: challengesWhereUniqueInput
  }

  export type challengesUpdateOneRequiredWithoutOpen_challengesNestedInput = {
    create?: XOR<challengesCreateWithoutOpen_challengesInput, challengesUncheckedCreateWithoutOpen_challengesInput>
    connectOrCreate?: challengesCreateOrConnectWithoutOpen_challengesInput
    upsert?: challengesUpsertWithoutOpen_challengesInput
    connect?: challengesWhereUniqueInput
    update?: XOR<XOR<challengesUpdateToOneWithWhereWithoutOpen_challengesInput, challengesUpdateWithoutOpen_challengesInput>, challengesUncheckedUpdateWithoutOpen_challengesInput>
  }

  export type challengesCreateNestedOneWithoutTargeted_challengesInput = {
    create?: XOR<challengesCreateWithoutTargeted_challengesInput, challengesUncheckedCreateWithoutTargeted_challengesInput>
    connectOrCreate?: challengesCreateOrConnectWithoutTargeted_challengesInput
    connect?: challengesWhereUniqueInput
  }

  export type challengesUpdateOneRequiredWithoutTargeted_challengesNestedInput = {
    create?: XOR<challengesCreateWithoutTargeted_challengesInput, challengesUncheckedCreateWithoutTargeted_challengesInput>
    connectOrCreate?: challengesCreateOrConnectWithoutTargeted_challengesInput
    upsert?: challengesUpsertWithoutTargeted_challengesInput
    connect?: challengesWhereUniqueInput
    update?: XOR<XOR<challengesUpdateToOneWithWhereWithoutTargeted_challengesInput, challengesUpdateWithoutTargeted_challengesInput>, challengesUncheckedUpdateWithoutTargeted_challengesInput>
  }

  export type challengesCreateNestedOneWithoutChallenge_submissionsInput = {
    create?: XOR<challengesCreateWithoutChallenge_submissionsInput, challengesUncheckedCreateWithoutChallenge_submissionsInput>
    connectOrCreate?: challengesCreateOrConnectWithoutChallenge_submissionsInput
    connect?: challengesWhereUniqueInput
  }

  export type profileCreateNestedOneWithoutChallenge_submissionsInput = {
    create?: XOR<profileCreateWithoutChallenge_submissionsInput, profileUncheckedCreateWithoutChallenge_submissionsInput>
    connectOrCreate?: profileCreateOrConnectWithoutChallenge_submissionsInput
    connect?: profileWhereUniqueInput
  }

  export type challengesUpdateOneRequiredWithoutChallenge_submissionsNestedInput = {
    create?: XOR<challengesCreateWithoutChallenge_submissionsInput, challengesUncheckedCreateWithoutChallenge_submissionsInput>
    connectOrCreate?: challengesCreateOrConnectWithoutChallenge_submissionsInput
    upsert?: challengesUpsertWithoutChallenge_submissionsInput
    connect?: challengesWhereUniqueInput
    update?: XOR<XOR<challengesUpdateToOneWithWhereWithoutChallenge_submissionsInput, challengesUpdateWithoutChallenge_submissionsInput>, challengesUncheckedUpdateWithoutChallenge_submissionsInput>
  }

  export type profileUpdateOneRequiredWithoutChallenge_submissionsNestedInput = {
    create?: XOR<profileCreateWithoutChallenge_submissionsInput, profileUncheckedCreateWithoutChallenge_submissionsInput>
    connectOrCreate?: profileCreateOrConnectWithoutChallenge_submissionsInput
    upsert?: profileUpsertWithoutChallenge_submissionsInput
    connect?: profileWhereUniqueInput
    update?: XOR<XOR<profileUpdateToOneWithWhereWithoutChallenge_submissionsInput, profileUpdateWithoutChallenge_submissionsInput>, profileUncheckedUpdateWithoutChallenge_submissionsInput>
  }

  export type challenge_submissionsCreateNestedManyWithoutProfileInput = {
    create?: XOR<challenge_submissionsCreateWithoutProfileInput, challenge_submissionsUncheckedCreateWithoutProfileInput> | challenge_submissionsCreateWithoutProfileInput[] | challenge_submissionsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: challenge_submissionsCreateOrConnectWithoutProfileInput | challenge_submissionsCreateOrConnectWithoutProfileInput[]
    createMany?: challenge_submissionsCreateManyProfileInputEnvelope
    connect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
  }

  export type challengesCreateNestedManyWithoutProfileInput = {
    create?: XOR<challengesCreateWithoutProfileInput, challengesUncheckedCreateWithoutProfileInput> | challengesCreateWithoutProfileInput[] | challengesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutProfileInput | challengesCreateOrConnectWithoutProfileInput[]
    createMany?: challengesCreateManyProfileInputEnvelope
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
  }

  export type challenge_submissionsUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<challenge_submissionsCreateWithoutProfileInput, challenge_submissionsUncheckedCreateWithoutProfileInput> | challenge_submissionsCreateWithoutProfileInput[] | challenge_submissionsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: challenge_submissionsCreateOrConnectWithoutProfileInput | challenge_submissionsCreateOrConnectWithoutProfileInput[]
    createMany?: challenge_submissionsCreateManyProfileInputEnvelope
    connect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
  }

  export type challengesUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<challengesCreateWithoutProfileInput, challengesUncheckedCreateWithoutProfileInput> | challengesCreateWithoutProfileInput[] | challengesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutProfileInput | challengesCreateOrConnectWithoutProfileInput[]
    createMany?: challengesCreateManyProfileInputEnvelope
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
  }

  export type Enumgender_typeFieldUpdateOperationsInput = {
    set?: $Enums.gender_type
  }

  export type challenge_submissionsUpdateManyWithoutProfileNestedInput = {
    create?: XOR<challenge_submissionsCreateWithoutProfileInput, challenge_submissionsUncheckedCreateWithoutProfileInput> | challenge_submissionsCreateWithoutProfileInput[] | challenge_submissionsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: challenge_submissionsCreateOrConnectWithoutProfileInput | challenge_submissionsCreateOrConnectWithoutProfileInput[]
    upsert?: challenge_submissionsUpsertWithWhereUniqueWithoutProfileInput | challenge_submissionsUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: challenge_submissionsCreateManyProfileInputEnvelope
    set?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    disconnect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    delete?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    connect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    update?: challenge_submissionsUpdateWithWhereUniqueWithoutProfileInput | challenge_submissionsUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: challenge_submissionsUpdateManyWithWhereWithoutProfileInput | challenge_submissionsUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: challenge_submissionsScalarWhereInput | challenge_submissionsScalarWhereInput[]
  }

  export type challengesUpdateManyWithoutProfileNestedInput = {
    create?: XOR<challengesCreateWithoutProfileInput, challengesUncheckedCreateWithoutProfileInput> | challengesCreateWithoutProfileInput[] | challengesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutProfileInput | challengesCreateOrConnectWithoutProfileInput[]
    upsert?: challengesUpsertWithWhereUniqueWithoutProfileInput | challengesUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: challengesCreateManyProfileInputEnvelope
    set?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    disconnect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    delete?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    update?: challengesUpdateWithWhereUniqueWithoutProfileInput | challengesUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: challengesUpdateManyWithWhereWithoutProfileInput | challengesUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: challengesScalarWhereInput | challengesScalarWhereInput[]
  }

  export type challenge_submissionsUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<challenge_submissionsCreateWithoutProfileInput, challenge_submissionsUncheckedCreateWithoutProfileInput> | challenge_submissionsCreateWithoutProfileInput[] | challenge_submissionsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: challenge_submissionsCreateOrConnectWithoutProfileInput | challenge_submissionsCreateOrConnectWithoutProfileInput[]
    upsert?: challenge_submissionsUpsertWithWhereUniqueWithoutProfileInput | challenge_submissionsUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: challenge_submissionsCreateManyProfileInputEnvelope
    set?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    disconnect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    delete?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    connect?: challenge_submissionsWhereUniqueInput | challenge_submissionsWhereUniqueInput[]
    update?: challenge_submissionsUpdateWithWhereUniqueWithoutProfileInput | challenge_submissionsUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: challenge_submissionsUpdateManyWithWhereWithoutProfileInput | challenge_submissionsUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: challenge_submissionsScalarWhereInput | challenge_submissionsScalarWhereInput[]
  }

  export type challengesUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<challengesCreateWithoutProfileInput, challengesUncheckedCreateWithoutProfileInput> | challengesCreateWithoutProfileInput[] | challengesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutProfileInput | challengesCreateOrConnectWithoutProfileInput[]
    upsert?: challengesUpsertWithWhereUniqueWithoutProfileInput | challengesUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: challengesCreateManyProfileInputEnvelope
    set?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    disconnect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    delete?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
    update?: challengesUpdateWithWhereUniqueWithoutProfileInput | challengesUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: challengesUpdateManyWithWhereWithoutProfileInput | challengesUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: challengesScalarWhereInput | challengesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumc_target_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.c_target_type | Enumc_target_typeFieldRefInput<$PrismaModel>
    in?: $Enums.c_target_type[] | ListEnumc_target_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.c_target_type[] | ListEnumc_target_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumc_target_typeFilter<$PrismaModel> | $Enums.c_target_type
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumc_target_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.c_target_type | Enumc_target_typeFieldRefInput<$PrismaModel>
    in?: $Enums.c_target_type[] | ListEnumc_target_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.c_target_type[] | ListEnumc_target_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumc_target_typeWithAggregatesFilter<$PrismaModel> | $Enums.c_target_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumc_target_typeFilter<$PrismaModel>
    _max?: NestedEnumc_target_typeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumgender_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_type | Enumgender_typeFieldRefInput<$PrismaModel>
    in?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_typeFilter<$PrismaModel> | $Enums.gender_type
  }

  export type NestedEnumgender_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender_type | Enumgender_typeFieldRefInput<$PrismaModel>
    in?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender_type[] | ListEnumgender_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumgender_typeWithAggregatesFilter<$PrismaModel> | $Enums.gender_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgender_typeFilter<$PrismaModel>
    _max?: NestedEnumgender_typeFilter<$PrismaModel>
  }

  export type challenge_submissionsCreateWithoutChallengesInput = {
    submission_data?: string | null
    time_submitted?: Date | string
    profile: profileCreateNestedOneWithoutChallenge_submissionsInput
  }

  export type challenge_submissionsUncheckedCreateWithoutChallengesInput = {
    id?: number
    user_id: string
    submission_data?: string | null
    time_submitted?: Date | string
  }

  export type challenge_submissionsCreateOrConnectWithoutChallengesInput = {
    where: challenge_submissionsWhereUniqueInput
    create: XOR<challenge_submissionsCreateWithoutChallengesInput, challenge_submissionsUncheckedCreateWithoutChallengesInput>
  }

  export type challenge_submissionsCreateManyChallengesInputEnvelope = {
    data: challenge_submissionsCreateManyChallengesInput | challenge_submissionsCreateManyChallengesInput[]
    skipDuplicates?: boolean
  }

  export type profileCreateWithoutChallengesInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenge_submissions?: challenge_submissionsCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateWithoutChallengesInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenge_submissions?: challenge_submissionsUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileCreateOrConnectWithoutChallengesInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutChallengesInput, profileUncheckedCreateWithoutChallengesInput>
  }

  export type open_challengesCreateWithoutChallengesInput = {
    submissions?: number
  }

  export type open_challengesUncheckedCreateWithoutChallengesInput = {
    submissions?: number
  }

  export type open_challengesCreateOrConnectWithoutChallengesInput = {
    where: open_challengesWhereUniqueInput
    create: XOR<open_challengesCreateWithoutChallengesInput, open_challengesUncheckedCreateWithoutChallengesInput>
  }

  export type targeted_challengesCreateWithoutChallengesInput = {
    value_bet_for: number
    value_bet_against: number
    specific_target: string
  }

  export type targeted_challengesUncheckedCreateWithoutChallengesInput = {
    value_bet_for: number
    value_bet_against: number
    specific_target: string
  }

  export type targeted_challengesCreateOrConnectWithoutChallengesInput = {
    where: targeted_challengesWhereUniqueInput
    create: XOR<targeted_challengesCreateWithoutChallengesInput, targeted_challengesUncheckedCreateWithoutChallengesInput>
  }

  export type challenge_submissionsUpsertWithWhereUniqueWithoutChallengesInput = {
    where: challenge_submissionsWhereUniqueInput
    update: XOR<challenge_submissionsUpdateWithoutChallengesInput, challenge_submissionsUncheckedUpdateWithoutChallengesInput>
    create: XOR<challenge_submissionsCreateWithoutChallengesInput, challenge_submissionsUncheckedCreateWithoutChallengesInput>
  }

  export type challenge_submissionsUpdateWithWhereUniqueWithoutChallengesInput = {
    where: challenge_submissionsWhereUniqueInput
    data: XOR<challenge_submissionsUpdateWithoutChallengesInput, challenge_submissionsUncheckedUpdateWithoutChallengesInput>
  }

  export type challenge_submissionsUpdateManyWithWhereWithoutChallengesInput = {
    where: challenge_submissionsScalarWhereInput
    data: XOR<challenge_submissionsUpdateManyMutationInput, challenge_submissionsUncheckedUpdateManyWithoutChallengesInput>
  }

  export type challenge_submissionsScalarWhereInput = {
    AND?: challenge_submissionsScalarWhereInput | challenge_submissionsScalarWhereInput[]
    OR?: challenge_submissionsScalarWhereInput[]
    NOT?: challenge_submissionsScalarWhereInput | challenge_submissionsScalarWhereInput[]
    id?: IntFilter<"challenge_submissions"> | number
    user_id?: StringFilter<"challenge_submissions"> | string
    challenge_id?: IntFilter<"challenge_submissions"> | number
    submission_data?: StringNullableFilter<"challenge_submissions"> | string | null
    time_submitted?: DateTimeFilter<"challenge_submissions"> | Date | string
  }

  export type profileUpsertWithoutChallengesInput = {
    update: XOR<profileUpdateWithoutChallengesInput, profileUncheckedUpdateWithoutChallengesInput>
    create: XOR<profileCreateWithoutChallengesInput, profileUncheckedCreateWithoutChallengesInput>
    where?: profileWhereInput
  }

  export type profileUpdateToOneWithWhereWithoutChallengesInput = {
    where?: profileWhereInput
    data: XOR<profileUpdateWithoutChallengesInput, profileUncheckedUpdateWithoutChallengesInput>
  }

  export type profileUpdateWithoutChallengesInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenge_submissions?: challenge_submissionsUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateWithoutChallengesInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenge_submissions?: challenge_submissionsUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type open_challengesUpsertWithoutChallengesInput = {
    update: XOR<open_challengesUpdateWithoutChallengesInput, open_challengesUncheckedUpdateWithoutChallengesInput>
    create: XOR<open_challengesCreateWithoutChallengesInput, open_challengesUncheckedCreateWithoutChallengesInput>
    where?: open_challengesWhereInput
  }

  export type open_challengesUpdateToOneWithWhereWithoutChallengesInput = {
    where?: open_challengesWhereInput
    data: XOR<open_challengesUpdateWithoutChallengesInput, open_challengesUncheckedUpdateWithoutChallengesInput>
  }

  export type open_challengesUpdateWithoutChallengesInput = {
    submissions?: IntFieldUpdateOperationsInput | number
  }

  export type open_challengesUncheckedUpdateWithoutChallengesInput = {
    submissions?: IntFieldUpdateOperationsInput | number
  }

  export type targeted_challengesUpsertWithoutChallengesInput = {
    update: XOR<targeted_challengesUpdateWithoutChallengesInput, targeted_challengesUncheckedUpdateWithoutChallengesInput>
    create: XOR<targeted_challengesCreateWithoutChallengesInput, targeted_challengesUncheckedCreateWithoutChallengesInput>
    where?: targeted_challengesWhereInput
  }

  export type targeted_challengesUpdateToOneWithWhereWithoutChallengesInput = {
    where?: targeted_challengesWhereInput
    data: XOR<targeted_challengesUpdateWithoutChallengesInput, targeted_challengesUncheckedUpdateWithoutChallengesInput>
  }

  export type targeted_challengesUpdateWithoutChallengesInput = {
    value_bet_for?: IntFieldUpdateOperationsInput | number
    value_bet_against?: IntFieldUpdateOperationsInput | number
    specific_target?: StringFieldUpdateOperationsInput | string
  }

  export type targeted_challengesUncheckedUpdateWithoutChallengesInput = {
    value_bet_for?: IntFieldUpdateOperationsInput | number
    value_bet_against?: IntFieldUpdateOperationsInput | number
    specific_target?: StringFieldUpdateOperationsInput | string
  }

  export type challengesCreateWithoutOpen_challengesInput = {
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
    challenge_submissions?: challenge_submissionsCreateNestedManyWithoutChallengesInput
    profile?: profileCreateNestedOneWithoutChallengesInput
    targeted_challenges?: targeted_challengesCreateNestedOneWithoutChallengesInput
  }

  export type challengesUncheckedCreateWithoutOpen_challengesInput = {
    id?: number
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
    creator_id?: string | null
    challenge_submissions?: challenge_submissionsUncheckedCreateNestedManyWithoutChallengesInput
    targeted_challenges?: targeted_challengesUncheckedCreateNestedOneWithoutChallengesInput
  }

  export type challengesCreateOrConnectWithoutOpen_challengesInput = {
    where: challengesWhereUniqueInput
    create: XOR<challengesCreateWithoutOpen_challengesInput, challengesUncheckedCreateWithoutOpen_challengesInput>
  }

  export type challengesUpsertWithoutOpen_challengesInput = {
    update: XOR<challengesUpdateWithoutOpen_challengesInput, challengesUncheckedUpdateWithoutOpen_challengesInput>
    create: XOR<challengesCreateWithoutOpen_challengesInput, challengesUncheckedCreateWithoutOpen_challengesInput>
    where?: challengesWhereInput
  }

  export type challengesUpdateToOneWithWhereWithoutOpen_challengesInput = {
    where?: challengesWhereInput
    data: XOR<challengesUpdateWithoutOpen_challengesInput, challengesUncheckedUpdateWithoutOpen_challengesInput>
  }

  export type challengesUpdateWithoutOpen_challengesInput = {
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge_submissions?: challenge_submissionsUpdateManyWithoutChallengesNestedInput
    profile?: profileUpdateOneWithoutChallengesNestedInput
    targeted_challenges?: targeted_challengesUpdateOneWithoutChallengesNestedInput
  }

  export type challengesUncheckedUpdateWithoutOpen_challengesInput = {
    id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    challenge_submissions?: challenge_submissionsUncheckedUpdateManyWithoutChallengesNestedInput
    targeted_challenges?: targeted_challengesUncheckedUpdateOneWithoutChallengesNestedInput
  }

  export type challengesCreateWithoutTargeted_challengesInput = {
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
    challenge_submissions?: challenge_submissionsCreateNestedManyWithoutChallengesInput
    profile?: profileCreateNestedOneWithoutChallengesInput
    open_challenges?: open_challengesCreateNestedOneWithoutChallengesInput
  }

  export type challengesUncheckedCreateWithoutTargeted_challengesInput = {
    id?: number
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
    creator_id?: string | null
    challenge_submissions?: challenge_submissionsUncheckedCreateNestedManyWithoutChallengesInput
    open_challenges?: open_challengesUncheckedCreateNestedOneWithoutChallengesInput
  }

  export type challengesCreateOrConnectWithoutTargeted_challengesInput = {
    where: challengesWhereUniqueInput
    create: XOR<challengesCreateWithoutTargeted_challengesInput, challengesUncheckedCreateWithoutTargeted_challengesInput>
  }

  export type challengesUpsertWithoutTargeted_challengesInput = {
    update: XOR<challengesUpdateWithoutTargeted_challengesInput, challengesUncheckedUpdateWithoutTargeted_challengesInput>
    create: XOR<challengesCreateWithoutTargeted_challengesInput, challengesUncheckedCreateWithoutTargeted_challengesInput>
    where?: challengesWhereInput
  }

  export type challengesUpdateToOneWithWhereWithoutTargeted_challengesInput = {
    where?: challengesWhereInput
    data: XOR<challengesUpdateWithoutTargeted_challengesInput, challengesUncheckedUpdateWithoutTargeted_challengesInput>
  }

  export type challengesUpdateWithoutTargeted_challengesInput = {
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge_submissions?: challenge_submissionsUpdateManyWithoutChallengesNestedInput
    profile?: profileUpdateOneWithoutChallengesNestedInput
    open_challenges?: open_challengesUpdateOneWithoutChallengesNestedInput
  }

  export type challengesUncheckedUpdateWithoutTargeted_challengesInput = {
    id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    challenge_submissions?: challenge_submissionsUncheckedUpdateManyWithoutChallengesNestedInput
    open_challenges?: open_challengesUncheckedUpdateOneWithoutChallengesNestedInput
  }

  export type challengesCreateWithoutChallenge_submissionsInput = {
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
    profile?: profileCreateNestedOneWithoutChallengesInput
    open_challenges?: open_challengesCreateNestedOneWithoutChallengesInput
    targeted_challenges?: targeted_challengesCreateNestedOneWithoutChallengesInput
  }

  export type challengesUncheckedCreateWithoutChallenge_submissionsInput = {
    id?: number
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
    creator_id?: string | null
    open_challenges?: open_challengesUncheckedCreateNestedOneWithoutChallengesInput
    targeted_challenges?: targeted_challengesUncheckedCreateNestedOneWithoutChallengesInput
  }

  export type challengesCreateOrConnectWithoutChallenge_submissionsInput = {
    where: challengesWhereUniqueInput
    create: XOR<challengesCreateWithoutChallenge_submissionsInput, challengesUncheckedCreateWithoutChallenge_submissionsInput>
  }

  export type profileCreateWithoutChallenge_submissionsInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenges?: challengesCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateWithoutChallenge_submissionsInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenges?: challengesUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileCreateOrConnectWithoutChallenge_submissionsInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutChallenge_submissionsInput, profileUncheckedCreateWithoutChallenge_submissionsInput>
  }

  export type challengesUpsertWithoutChallenge_submissionsInput = {
    update: XOR<challengesUpdateWithoutChallenge_submissionsInput, challengesUncheckedUpdateWithoutChallenge_submissionsInput>
    create: XOR<challengesCreateWithoutChallenge_submissionsInput, challengesUncheckedCreateWithoutChallenge_submissionsInput>
    where?: challengesWhereInput
  }

  export type challengesUpdateToOneWithWhereWithoutChallenge_submissionsInput = {
    where?: challengesWhereInput
    data: XOR<challengesUpdateWithoutChallenge_submissionsInput, challengesUncheckedUpdateWithoutChallenge_submissionsInput>
  }

  export type challengesUpdateWithoutChallenge_submissionsInput = {
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: profileUpdateOneWithoutChallengesNestedInput
    open_challenges?: open_challengesUpdateOneWithoutChallengesNestedInput
    targeted_challenges?: targeted_challengesUpdateOneWithoutChallengesNestedInput
  }

  export type challengesUncheckedUpdateWithoutChallenge_submissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    creator_id?: NullableStringFieldUpdateOperationsInput | string | null
    open_challenges?: open_challengesUncheckedUpdateOneWithoutChallengesNestedInput
    targeted_challenges?: targeted_challengesUncheckedUpdateOneWithoutChallengesNestedInput
  }

  export type profileUpsertWithoutChallenge_submissionsInput = {
    update: XOR<profileUpdateWithoutChallenge_submissionsInput, profileUncheckedUpdateWithoutChallenge_submissionsInput>
    create: XOR<profileCreateWithoutChallenge_submissionsInput, profileUncheckedCreateWithoutChallenge_submissionsInput>
    where?: profileWhereInput
  }

  export type profileUpdateToOneWithWhereWithoutChallenge_submissionsInput = {
    where?: profileWhereInput
    data: XOR<profileUpdateWithoutChallenge_submissionsInput, profileUncheckedUpdateWithoutChallenge_submissionsInput>
  }

  export type profileUpdateWithoutChallenge_submissionsInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenges?: challengesUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateWithoutChallenge_submissionsInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenges?: challengesUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type challenge_submissionsCreateWithoutProfileInput = {
    submission_data?: string | null
    time_submitted?: Date | string
    challenges: challengesCreateNestedOneWithoutChallenge_submissionsInput
  }

  export type challenge_submissionsUncheckedCreateWithoutProfileInput = {
    id?: number
    challenge_id: number
    submission_data?: string | null
    time_submitted?: Date | string
  }

  export type challenge_submissionsCreateOrConnectWithoutProfileInput = {
    where: challenge_submissionsWhereUniqueInput
    create: XOR<challenge_submissionsCreateWithoutProfileInput, challenge_submissionsUncheckedCreateWithoutProfileInput>
  }

  export type challenge_submissionsCreateManyProfileInputEnvelope = {
    data: challenge_submissionsCreateManyProfileInput | challenge_submissionsCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type challengesCreateWithoutProfileInput = {
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
    challenge_submissions?: challenge_submissionsCreateNestedManyWithoutChallengesInput
    open_challenges?: open_challengesCreateNestedOneWithoutChallengesInput
    targeted_challenges?: targeted_challengesCreateNestedOneWithoutChallengesInput
  }

  export type challengesUncheckedCreateWithoutProfileInput = {
    id?: number
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
    challenge_submissions?: challenge_submissionsUncheckedCreateNestedManyWithoutChallengesInput
    open_challenges?: open_challengesUncheckedCreateNestedOneWithoutChallengesInput
    targeted_challenges?: targeted_challengesUncheckedCreateNestedOneWithoutChallengesInput
  }

  export type challengesCreateOrConnectWithoutProfileInput = {
    where: challengesWhereUniqueInput
    create: XOR<challengesCreateWithoutProfileInput, challengesUncheckedCreateWithoutProfileInput>
  }

  export type challengesCreateManyProfileInputEnvelope = {
    data: challengesCreateManyProfileInput | challengesCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type challenge_submissionsUpsertWithWhereUniqueWithoutProfileInput = {
    where: challenge_submissionsWhereUniqueInput
    update: XOR<challenge_submissionsUpdateWithoutProfileInput, challenge_submissionsUncheckedUpdateWithoutProfileInput>
    create: XOR<challenge_submissionsCreateWithoutProfileInput, challenge_submissionsUncheckedCreateWithoutProfileInput>
  }

  export type challenge_submissionsUpdateWithWhereUniqueWithoutProfileInput = {
    where: challenge_submissionsWhereUniqueInput
    data: XOR<challenge_submissionsUpdateWithoutProfileInput, challenge_submissionsUncheckedUpdateWithoutProfileInput>
  }

  export type challenge_submissionsUpdateManyWithWhereWithoutProfileInput = {
    where: challenge_submissionsScalarWhereInput
    data: XOR<challenge_submissionsUpdateManyMutationInput, challenge_submissionsUncheckedUpdateManyWithoutProfileInput>
  }

  export type challengesUpsertWithWhereUniqueWithoutProfileInput = {
    where: challengesWhereUniqueInput
    update: XOR<challengesUpdateWithoutProfileInput, challengesUncheckedUpdateWithoutProfileInput>
    create: XOR<challengesCreateWithoutProfileInput, challengesUncheckedCreateWithoutProfileInput>
  }

  export type challengesUpdateWithWhereUniqueWithoutProfileInput = {
    where: challengesWhereUniqueInput
    data: XOR<challengesUpdateWithoutProfileInput, challengesUncheckedUpdateWithoutProfileInput>
  }

  export type challengesUpdateManyWithWhereWithoutProfileInput = {
    where: challengesScalarWhereInput
    data: XOR<challengesUpdateManyMutationInput, challengesUncheckedUpdateManyWithoutProfileInput>
  }

  export type challengesScalarWhereInput = {
    AND?: challengesScalarWhereInput | challengesScalarWhereInput[]
    OR?: challengesScalarWhereInput[]
    NOT?: challengesScalarWhereInput | challengesScalarWhereInput[]
    id?: IntFilter<"challenges"> | number
    c_target?: Enumc_target_typeFilter<"challenges"> | $Enums.c_target_type
    c_description?: StringFilter<"challenges"> | string
    title?: StringFilter<"challenges"> | string
    time_created?: DateTimeFilter<"challenges"> | Date | string
    creator_id?: StringNullableFilter<"challenges"> | string | null
  }

  export type challenge_submissionsCreateManyChallengesInput = {
    id?: number
    user_id: string
    submission_data?: string | null
    time_submitted?: Date | string
  }

  export type challenge_submissionsUpdateWithoutChallengesInput = {
    submission_data?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: profileUpdateOneRequiredWithoutChallenge_submissionsNestedInput
  }

  export type challenge_submissionsUncheckedUpdateWithoutChallengesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    submission_data?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challenge_submissionsUncheckedUpdateManyWithoutChallengesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    submission_data?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challenge_submissionsCreateManyProfileInput = {
    id?: number
    challenge_id: number
    submission_data?: string | null
    time_submitted?: Date | string
  }

  export type challengesCreateManyProfileInput = {
    id?: number
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
  }

  export type challenge_submissionsUpdateWithoutProfileInput = {
    submission_data?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
    challenges?: challengesUpdateOneRequiredWithoutChallenge_submissionsNestedInput
  }

  export type challenge_submissionsUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    submission_data?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challenge_submissionsUncheckedUpdateManyWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    submission_data?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type challengesUpdateWithoutProfileInput = {
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge_submissions?: challenge_submissionsUpdateManyWithoutChallengesNestedInput
    open_challenges?: open_challengesUpdateOneWithoutChallengesNestedInput
    targeted_challenges?: targeted_challengesUpdateOneWithoutChallengesNestedInput
  }

  export type challengesUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    challenge_submissions?: challenge_submissionsUncheckedUpdateManyWithoutChallengesNestedInput
    open_challenges?: open_challengesUncheckedUpdateOneWithoutChallengesNestedInput
    targeted_challenges?: targeted_challengesUncheckedUpdateOneWithoutChallengesNestedInput
  }

  export type challengesUncheckedUpdateManyWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}