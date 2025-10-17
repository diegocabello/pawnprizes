
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
 * Model profile
 * 
 */
export type profile = $Result.DefaultSelection<Prisma.$profilePayload>
/**
 * Model open_challenge_submissions
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type open_challenge_submissions = $Result.DefaultSelection<Prisma.$open_challenge_submissionsPayload>
/**
 * Model targeted_challenges_bets
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type targeted_challenges_bets = $Result.DefaultSelection<Prisma.$targeted_challenges_betsPayload>
/**
 * Model targeted_challenges_submission
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type targeted_challenges_submission = $Result.DefaultSelection<Prisma.$targeted_challenges_submissionPayload>
/**
 * Model targeted_challenges_votes
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type targeted_challenges_votes = $Result.DefaultSelection<Prisma.$targeted_challenges_votesPayload>

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


export const cast_direction: {
  for: 'for',
  against: 'against'
};

export type cast_direction = (typeof cast_direction)[keyof typeof cast_direction]

}

export type c_target_type = $Enums.c_target_type

export const c_target_type: typeof $Enums.c_target_type

export type gender_type = $Enums.gender_type

export const gender_type: typeof $Enums.gender_type

export type cast_direction = $Enums.cast_direction

export const cast_direction: typeof $Enums.cast_direction

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
   * `prisma.profile`: Exposes CRUD operations for the **profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.profileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.open_challenge_submissions`: Exposes CRUD operations for the **open_challenge_submissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Open_challenge_submissions
    * const open_challenge_submissions = await prisma.open_challenge_submissions.findMany()
    * ```
    */
  get open_challenge_submissions(): Prisma.open_challenge_submissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.targeted_challenges_bets`: Exposes CRUD operations for the **targeted_challenges_bets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Targeted_challenges_bets
    * const targeted_challenges_bets = await prisma.targeted_challenges_bets.findMany()
    * ```
    */
  get targeted_challenges_bets(): Prisma.targeted_challenges_betsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.targeted_challenges_submission`: Exposes CRUD operations for the **targeted_challenges_submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Targeted_challenges_submissions
    * const targeted_challenges_submissions = await prisma.targeted_challenges_submission.findMany()
    * ```
    */
  get targeted_challenges_submission(): Prisma.targeted_challenges_submissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.targeted_challenges_votes`: Exposes CRUD operations for the **targeted_challenges_votes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Targeted_challenges_votes
    * const targeted_challenges_votes = await prisma.targeted_challenges_votes.findMany()
    * ```
    */
  get targeted_challenges_votes(): Prisma.targeted_challenges_votesDelegate<ExtArgs, ClientOptions>;
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
    profile: 'profile',
    open_challenge_submissions: 'open_challenge_submissions',
    targeted_challenges_bets: 'targeted_challenges_bets',
    targeted_challenges_submission: 'targeted_challenges_submission',
    targeted_challenges_votes: 'targeted_challenges_votes'
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
      modelProps: "challenges" | "open_challenges" | "targeted_challenges" | "profile" | "open_challenge_submissions" | "targeted_challenges_bets" | "targeted_challenges_submission" | "targeted_challenges_votes"
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
      open_challenge_submissions: {
        payload: Prisma.$open_challenge_submissionsPayload<ExtArgs>
        fields: Prisma.open_challenge_submissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.open_challenge_submissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challenge_submissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.open_challenge_submissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challenge_submissionsPayload>
          }
          findFirst: {
            args: Prisma.open_challenge_submissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challenge_submissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.open_challenge_submissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challenge_submissionsPayload>
          }
          findMany: {
            args: Prisma.open_challenge_submissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challenge_submissionsPayload>[]
          }
          create: {
            args: Prisma.open_challenge_submissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challenge_submissionsPayload>
          }
          createMany: {
            args: Prisma.open_challenge_submissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.open_challenge_submissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challenge_submissionsPayload>[]
          }
          delete: {
            args: Prisma.open_challenge_submissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challenge_submissionsPayload>
          }
          update: {
            args: Prisma.open_challenge_submissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challenge_submissionsPayload>
          }
          deleteMany: {
            args: Prisma.open_challenge_submissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.open_challenge_submissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.open_challenge_submissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challenge_submissionsPayload>[]
          }
          upsert: {
            args: Prisma.open_challenge_submissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$open_challenge_submissionsPayload>
          }
          aggregate: {
            args: Prisma.Open_challenge_submissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpen_challenge_submissions>
          }
          groupBy: {
            args: Prisma.open_challenge_submissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Open_challenge_submissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.open_challenge_submissionsCountArgs<ExtArgs>
            result: $Utils.Optional<Open_challenge_submissionsCountAggregateOutputType> | number
          }
        }
      }
      targeted_challenges_bets: {
        payload: Prisma.$targeted_challenges_betsPayload<ExtArgs>
        fields: Prisma.targeted_challenges_betsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.targeted_challenges_betsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_betsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.targeted_challenges_betsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_betsPayload>
          }
          findFirst: {
            args: Prisma.targeted_challenges_betsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_betsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.targeted_challenges_betsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_betsPayload>
          }
          findMany: {
            args: Prisma.targeted_challenges_betsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_betsPayload>[]
          }
          create: {
            args: Prisma.targeted_challenges_betsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_betsPayload>
          }
          createMany: {
            args: Prisma.targeted_challenges_betsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.targeted_challenges_betsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_betsPayload>[]
          }
          delete: {
            args: Prisma.targeted_challenges_betsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_betsPayload>
          }
          update: {
            args: Prisma.targeted_challenges_betsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_betsPayload>
          }
          deleteMany: {
            args: Prisma.targeted_challenges_betsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.targeted_challenges_betsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.targeted_challenges_betsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_betsPayload>[]
          }
          upsert: {
            args: Prisma.targeted_challenges_betsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_betsPayload>
          }
          aggregate: {
            args: Prisma.Targeted_challenges_betsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTargeted_challenges_bets>
          }
          groupBy: {
            args: Prisma.targeted_challenges_betsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Targeted_challenges_betsGroupByOutputType>[]
          }
          count: {
            args: Prisma.targeted_challenges_betsCountArgs<ExtArgs>
            result: $Utils.Optional<Targeted_challenges_betsCountAggregateOutputType> | number
          }
        }
      }
      targeted_challenges_submission: {
        payload: Prisma.$targeted_challenges_submissionPayload<ExtArgs>
        fields: Prisma.targeted_challenges_submissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.targeted_challenges_submissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_submissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.targeted_challenges_submissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_submissionPayload>
          }
          findFirst: {
            args: Prisma.targeted_challenges_submissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_submissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.targeted_challenges_submissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_submissionPayload>
          }
          findMany: {
            args: Prisma.targeted_challenges_submissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_submissionPayload>[]
          }
          create: {
            args: Prisma.targeted_challenges_submissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_submissionPayload>
          }
          createMany: {
            args: Prisma.targeted_challenges_submissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.targeted_challenges_submissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_submissionPayload>[]
          }
          delete: {
            args: Prisma.targeted_challenges_submissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_submissionPayload>
          }
          update: {
            args: Prisma.targeted_challenges_submissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_submissionPayload>
          }
          deleteMany: {
            args: Prisma.targeted_challenges_submissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.targeted_challenges_submissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.targeted_challenges_submissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_submissionPayload>[]
          }
          upsert: {
            args: Prisma.targeted_challenges_submissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_submissionPayload>
          }
          aggregate: {
            args: Prisma.Targeted_challenges_submissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTargeted_challenges_submission>
          }
          groupBy: {
            args: Prisma.targeted_challenges_submissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Targeted_challenges_submissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.targeted_challenges_submissionCountArgs<ExtArgs>
            result: $Utils.Optional<Targeted_challenges_submissionCountAggregateOutputType> | number
          }
        }
      }
      targeted_challenges_votes: {
        payload: Prisma.$targeted_challenges_votesPayload<ExtArgs>
        fields: Prisma.targeted_challenges_votesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.targeted_challenges_votesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_votesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.targeted_challenges_votesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_votesPayload>
          }
          findFirst: {
            args: Prisma.targeted_challenges_votesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_votesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.targeted_challenges_votesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_votesPayload>
          }
          findMany: {
            args: Prisma.targeted_challenges_votesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_votesPayload>[]
          }
          create: {
            args: Prisma.targeted_challenges_votesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_votesPayload>
          }
          createMany: {
            args: Prisma.targeted_challenges_votesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.targeted_challenges_votesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_votesPayload>[]
          }
          delete: {
            args: Prisma.targeted_challenges_votesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_votesPayload>
          }
          update: {
            args: Prisma.targeted_challenges_votesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_votesPayload>
          }
          deleteMany: {
            args: Prisma.targeted_challenges_votesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.targeted_challenges_votesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.targeted_challenges_votesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_votesPayload>[]
          }
          upsert: {
            args: Prisma.targeted_challenges_votesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$targeted_challenges_votesPayload>
          }
          aggregate: {
            args: Prisma.Targeted_challenges_votesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTargeted_challenges_votes>
          }
          groupBy: {
            args: Prisma.targeted_challenges_votesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Targeted_challenges_votesGroupByOutputType>[]
          }
          count: {
            args: Prisma.targeted_challenges_votesCountArgs<ExtArgs>
            result: $Utils.Optional<Targeted_challenges_votesCountAggregateOutputType> | number
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
    profile?: profileOmit
    open_challenge_submissions?: open_challenge_submissionsOmit
    targeted_challenges_bets?: targeted_challenges_betsOmit
    targeted_challenges_submission?: targeted_challenges_submissionOmit
    targeted_challenges_votes?: targeted_challenges_votesOmit
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
   * Count Type Open_challengesCountOutputType
   */

  export type Open_challengesCountOutputType = {
    open_challenge_submissions: number
  }

  export type Open_challengesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    open_challenge_submissions?: boolean | Open_challengesCountOutputTypeCountOpen_challenge_submissionsArgs
  }

  // Custom InputTypes
  /**
   * Open_challengesCountOutputType without action
   */
  export type Open_challengesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Open_challengesCountOutputType
     */
    select?: Open_challengesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Open_challengesCountOutputType without action
   */
  export type Open_challengesCountOutputTypeCountOpen_challenge_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: open_challenge_submissionsWhereInput
  }


  /**
   * Count Type Targeted_challengesCountOutputType
   */

  export type Targeted_challengesCountOutputType = {
    targeted_challenges_bets: number
    targeted_challenges_submission: number
    targeted_challenges_votes: number
  }

  export type Targeted_challengesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targeted_challenges_bets?: boolean | Targeted_challengesCountOutputTypeCountTargeted_challenges_betsArgs
    targeted_challenges_submission?: boolean | Targeted_challengesCountOutputTypeCountTargeted_challenges_submissionArgs
    targeted_challenges_votes?: boolean | Targeted_challengesCountOutputTypeCountTargeted_challenges_votesArgs
  }

  // Custom InputTypes
  /**
   * Targeted_challengesCountOutputType without action
   */
  export type Targeted_challengesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Targeted_challengesCountOutputType
     */
    select?: Targeted_challengesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Targeted_challengesCountOutputType without action
   */
  export type Targeted_challengesCountOutputTypeCountTargeted_challenges_betsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: targeted_challenges_betsWhereInput
  }

  /**
   * Targeted_challengesCountOutputType without action
   */
  export type Targeted_challengesCountOutputTypeCountTargeted_challenges_submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: targeted_challenges_submissionWhereInput
  }

  /**
   * Targeted_challengesCountOutputType without action
   */
  export type Targeted_challengesCountOutputTypeCountTargeted_challenges_votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: targeted_challenges_votesWhereInput
  }


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    challenges: number
    open_challenge_submissions: number
    targeted_challenges_bets: number
    targeted_challenges_submission: number
    targeted_challenges_votes: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | ProfileCountOutputTypeCountChallengesArgs
    open_challenge_submissions?: boolean | ProfileCountOutputTypeCountOpen_challenge_submissionsArgs
    targeted_challenges_bets?: boolean | ProfileCountOutputTypeCountTargeted_challenges_betsArgs
    targeted_challenges_submission?: boolean | ProfileCountOutputTypeCountTargeted_challenges_submissionArgs
    targeted_challenges_votes?: boolean | ProfileCountOutputTypeCountTargeted_challenges_votesArgs
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
  export type ProfileCountOutputTypeCountChallengesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: challengesWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountOpen_challenge_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: open_challenge_submissionsWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountTargeted_challenges_betsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: targeted_challenges_betsWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountTargeted_challenges_submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: targeted_challenges_submissionWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountTargeted_challenges_votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: targeted_challenges_votesWhereInput
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
    profile?: boolean | challenges$profileArgs<ExtArgs>
    open_challenges?: boolean | challenges$open_challengesArgs<ExtArgs>
    targeted_challenges?: boolean | challenges$targeted_challengesArgs<ExtArgs>
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
    profile?: boolean | challenges$profileArgs<ExtArgs>
    open_challenges?: boolean | challenges$open_challengesArgs<ExtArgs>
    targeted_challenges?: boolean | challenges$targeted_challengesArgs<ExtArgs>
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
    c_target: $Enums.c_target_type | null
    submissions: number | null
  }

  export type Open_challengesMaxAggregateOutputType = {
    challenge_id: number | null
    c_target: $Enums.c_target_type | null
    submissions: number | null
  }

  export type Open_challengesCountAggregateOutputType = {
    challenge_id: number
    c_target: number
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
    c_target?: true
    submissions?: true
  }

  export type Open_challengesMaxAggregateInputType = {
    challenge_id?: true
    c_target?: true
    submissions?: true
  }

  export type Open_challengesCountAggregateInputType = {
    challenge_id?: true
    c_target?: true
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
    c_target: $Enums.c_target_type
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
    c_target?: boolean
    submissions?: boolean
    open_challenge_submissions?: boolean | open_challenges$open_challenge_submissionsArgs<ExtArgs>
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
    _count?: boolean | Open_challengesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["open_challenges"]>

  export type open_challengesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_id?: boolean
    c_target?: boolean
    submissions?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["open_challenges"]>

  export type open_challengesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_id?: boolean
    c_target?: boolean
    submissions?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["open_challenges"]>

  export type open_challengesSelectScalar = {
    challenge_id?: boolean
    c_target?: boolean
    submissions?: boolean
  }

  export type open_challengesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"challenge_id" | "c_target" | "submissions", ExtArgs["result"]["open_challenges"]>
  export type open_challengesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    open_challenge_submissions?: boolean | open_challenges$open_challenge_submissionsArgs<ExtArgs>
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
    _count?: boolean | Open_challengesCountOutputTypeDefaultArgs<ExtArgs>
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
      open_challenge_submissions: Prisma.$open_challenge_submissionsPayload<ExtArgs>[]
      challenges: Prisma.$challengesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      challenge_id: number
      c_target: $Enums.c_target_type
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
    open_challenge_submissions<T extends open_challenges$open_challenge_submissionsArgs<ExtArgs> = {}>(args?: Subset<T, open_challenges$open_challenge_submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$open_challenge_submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly c_target: FieldRef<"open_challenges", 'c_target_type'>
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
   * open_challenges.open_challenge_submissions
   */
  export type open_challenges$open_challenge_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsInclude<ExtArgs> | null
    where?: open_challenge_submissionsWhereInput
    orderBy?: open_challenge_submissionsOrderByWithRelationInput | open_challenge_submissionsOrderByWithRelationInput[]
    cursor?: open_challenge_submissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Open_challenge_submissionsScalarFieldEnum | Open_challenge_submissionsScalarFieldEnum[]
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
    votes_for: number | null
    votes_against: number | null
    bettors_for: number | null
    bettors_against: number | null
    bet_spread_total: number | null
    bet_spread_for: number | null
    bet_spread_against: number | null
  }

  export type Targeted_challengesSumAggregateOutputType = {
    challenge_id: number | null
    votes_for: number | null
    votes_against: number | null
    bettors_for: number | null
    bettors_against: number | null
    bet_spread_total: number | null
    bet_spread_for: number | null
    bet_spread_against: number | null
  }

  export type Targeted_challengesMinAggregateOutputType = {
    challenge_id: number | null
    c_target: $Enums.c_target_type | null
    specific_target: string | null
    votes_for: number | null
    votes_against: number | null
    bettors_for: number | null
    bettors_against: number | null
    bet_spread_total: number | null
    bet_spread_for: number | null
    bet_spread_against: number | null
  }

  export type Targeted_challengesMaxAggregateOutputType = {
    challenge_id: number | null
    c_target: $Enums.c_target_type | null
    specific_target: string | null
    votes_for: number | null
    votes_against: number | null
    bettors_for: number | null
    bettors_against: number | null
    bet_spread_total: number | null
    bet_spread_for: number | null
    bet_spread_against: number | null
  }

  export type Targeted_challengesCountAggregateOutputType = {
    challenge_id: number
    c_target: number
    specific_target: number
    votes_for: number
    votes_against: number
    bettors_for: number
    bettors_against: number
    bet_spread_total: number
    bet_spread_for: number
    bet_spread_against: number
    _all: number
  }


  export type Targeted_challengesAvgAggregateInputType = {
    challenge_id?: true
    votes_for?: true
    votes_against?: true
    bettors_for?: true
    bettors_against?: true
    bet_spread_total?: true
    bet_spread_for?: true
    bet_spread_against?: true
  }

  export type Targeted_challengesSumAggregateInputType = {
    challenge_id?: true
    votes_for?: true
    votes_against?: true
    bettors_for?: true
    bettors_against?: true
    bet_spread_total?: true
    bet_spread_for?: true
    bet_spread_against?: true
  }

  export type Targeted_challengesMinAggregateInputType = {
    challenge_id?: true
    c_target?: true
    specific_target?: true
    votes_for?: true
    votes_against?: true
    bettors_for?: true
    bettors_against?: true
    bet_spread_total?: true
    bet_spread_for?: true
    bet_spread_against?: true
  }

  export type Targeted_challengesMaxAggregateInputType = {
    challenge_id?: true
    c_target?: true
    specific_target?: true
    votes_for?: true
    votes_against?: true
    bettors_for?: true
    bettors_against?: true
    bet_spread_total?: true
    bet_spread_for?: true
    bet_spread_against?: true
  }

  export type Targeted_challengesCountAggregateInputType = {
    challenge_id?: true
    c_target?: true
    specific_target?: true
    votes_for?: true
    votes_against?: true
    bettors_for?: true
    bettors_against?: true
    bet_spread_total?: true
    bet_spread_for?: true
    bet_spread_against?: true
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
    c_target: $Enums.c_target_type
    specific_target: string
    votes_for: number
    votes_against: number
    bettors_for: number
    bettors_against: number
    bet_spread_total: number
    bet_spread_for: number
    bet_spread_against: number
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
    c_target?: boolean
    specific_target?: boolean
    votes_for?: boolean
    votes_against?: boolean
    bettors_for?: boolean
    bettors_against?: boolean
    bet_spread_total?: boolean
    bet_spread_for?: boolean
    bet_spread_against?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
    targeted_challenges_bets?: boolean | targeted_challenges$targeted_challenges_betsArgs<ExtArgs>
    targeted_challenges_submission?: boolean | targeted_challenges$targeted_challenges_submissionArgs<ExtArgs>
    targeted_challenges_votes?: boolean | targeted_challenges$targeted_challenges_votesArgs<ExtArgs>
    _count?: boolean | Targeted_challengesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges"]>

  export type targeted_challengesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_id?: boolean
    c_target?: boolean
    specific_target?: boolean
    votes_for?: boolean
    votes_against?: boolean
    bettors_for?: boolean
    bettors_against?: boolean
    bet_spread_total?: boolean
    bet_spread_for?: boolean
    bet_spread_against?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges"]>

  export type targeted_challengesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    challenge_id?: boolean
    c_target?: boolean
    specific_target?: boolean
    votes_for?: boolean
    votes_against?: boolean
    bettors_for?: boolean
    bettors_against?: boolean
    bet_spread_total?: boolean
    bet_spread_for?: boolean
    bet_spread_against?: boolean
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges"]>

  export type targeted_challengesSelectScalar = {
    challenge_id?: boolean
    c_target?: boolean
    specific_target?: boolean
    votes_for?: boolean
    votes_against?: boolean
    bettors_for?: boolean
    bettors_against?: boolean
    bet_spread_total?: boolean
    bet_spread_for?: boolean
    bet_spread_against?: boolean
  }

  export type targeted_challengesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"challenge_id" | "c_target" | "specific_target" | "votes_for" | "votes_against" | "bettors_for" | "bettors_against" | "bet_spread_total" | "bet_spread_for" | "bet_spread_against", ExtArgs["result"]["targeted_challenges"]>
  export type targeted_challengesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    challenges?: boolean | challengesDefaultArgs<ExtArgs>
    targeted_challenges_bets?: boolean | targeted_challenges$targeted_challenges_betsArgs<ExtArgs>
    targeted_challenges_submission?: boolean | targeted_challenges$targeted_challenges_submissionArgs<ExtArgs>
    targeted_challenges_votes?: boolean | targeted_challenges$targeted_challenges_votesArgs<ExtArgs>
    _count?: boolean | Targeted_challengesCountOutputTypeDefaultArgs<ExtArgs>
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
      targeted_challenges_bets: Prisma.$targeted_challenges_betsPayload<ExtArgs>[]
      targeted_challenges_submission: Prisma.$targeted_challenges_submissionPayload<ExtArgs>[]
      targeted_challenges_votes: Prisma.$targeted_challenges_votesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      challenge_id: number
      c_target: $Enums.c_target_type
      specific_target: string
      votes_for: number
      votes_against: number
      bettors_for: number
      bettors_against: number
      bet_spread_total: number
      bet_spread_for: number
      bet_spread_against: number
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
    targeted_challenges_bets<T extends targeted_challenges$targeted_challenges_betsArgs<ExtArgs> = {}>(args?: Subset<T, targeted_challenges$targeted_challenges_betsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_betsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    targeted_challenges_submission<T extends targeted_challenges$targeted_challenges_submissionArgs<ExtArgs> = {}>(args?: Subset<T, targeted_challenges$targeted_challenges_submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_submissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    targeted_challenges_votes<T extends targeted_challenges$targeted_challenges_votesArgs<ExtArgs> = {}>(args?: Subset<T, targeted_challenges$targeted_challenges_votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_votesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly c_target: FieldRef<"targeted_challenges", 'c_target_type'>
    readonly specific_target: FieldRef<"targeted_challenges", 'String'>
    readonly votes_for: FieldRef<"targeted_challenges", 'Int'>
    readonly votes_against: FieldRef<"targeted_challenges", 'Int'>
    readonly bettors_for: FieldRef<"targeted_challenges", 'Int'>
    readonly bettors_against: FieldRef<"targeted_challenges", 'Int'>
    readonly bet_spread_total: FieldRef<"targeted_challenges", 'Int'>
    readonly bet_spread_for: FieldRef<"targeted_challenges", 'Int'>
    readonly bet_spread_against: FieldRef<"targeted_challenges", 'Int'>
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
   * targeted_challenges.targeted_challenges_bets
   */
  export type targeted_challenges$targeted_challenges_betsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsInclude<ExtArgs> | null
    where?: targeted_challenges_betsWhereInput
    orderBy?: targeted_challenges_betsOrderByWithRelationInput | targeted_challenges_betsOrderByWithRelationInput[]
    cursor?: targeted_challenges_betsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Targeted_challenges_betsScalarFieldEnum | Targeted_challenges_betsScalarFieldEnum[]
  }

  /**
   * targeted_challenges.targeted_challenges_submission
   */
  export type targeted_challenges$targeted_challenges_submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionInclude<ExtArgs> | null
    where?: targeted_challenges_submissionWhereInput
    orderBy?: targeted_challenges_submissionOrderByWithRelationInput | targeted_challenges_submissionOrderByWithRelationInput[]
    cursor?: targeted_challenges_submissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Targeted_challenges_submissionScalarFieldEnum | Targeted_challenges_submissionScalarFieldEnum[]
  }

  /**
   * targeted_challenges.targeted_challenges_votes
   */
  export type targeted_challenges$targeted_challenges_votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesInclude<ExtArgs> | null
    where?: targeted_challenges_votesWhereInput
    orderBy?: targeted_challenges_votesOrderByWithRelationInput | targeted_challenges_votesOrderByWithRelationInput[]
    cursor?: targeted_challenges_votesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Targeted_challenges_votesScalarFieldEnum | Targeted_challenges_votesScalarFieldEnum[]
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
    challenges?: boolean | profile$challengesArgs<ExtArgs>
    open_challenge_submissions?: boolean | profile$open_challenge_submissionsArgs<ExtArgs>
    targeted_challenges_bets?: boolean | profile$targeted_challenges_betsArgs<ExtArgs>
    targeted_challenges_submission?: boolean | profile$targeted_challenges_submissionArgs<ExtArgs>
    targeted_challenges_votes?: boolean | profile$targeted_challenges_votesArgs<ExtArgs>
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
    challenges?: boolean | profile$challengesArgs<ExtArgs>
    open_challenge_submissions?: boolean | profile$open_challenge_submissionsArgs<ExtArgs>
    targeted_challenges_bets?: boolean | profile$targeted_challenges_betsArgs<ExtArgs>
    targeted_challenges_submission?: boolean | profile$targeted_challenges_submissionArgs<ExtArgs>
    targeted_challenges_votes?: boolean | profile$targeted_challenges_votesArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type profileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type profileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $profilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profile"
    objects: {
      challenges: Prisma.$challengesPayload<ExtArgs>[]
      open_challenge_submissions: Prisma.$open_challenge_submissionsPayload<ExtArgs>[]
      targeted_challenges_bets: Prisma.$targeted_challenges_betsPayload<ExtArgs>[]
      targeted_challenges_submission: Prisma.$targeted_challenges_submissionPayload<ExtArgs>[]
      targeted_challenges_votes: Prisma.$targeted_challenges_votesPayload<ExtArgs>[]
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
    challenges<T extends profile$challengesArgs<ExtArgs> = {}>(args?: Subset<T, profile$challengesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$challengesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    open_challenge_submissions<T extends profile$open_challenge_submissionsArgs<ExtArgs> = {}>(args?: Subset<T, profile$open_challenge_submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$open_challenge_submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    targeted_challenges_bets<T extends profile$targeted_challenges_betsArgs<ExtArgs> = {}>(args?: Subset<T, profile$targeted_challenges_betsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_betsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    targeted_challenges_submission<T extends profile$targeted_challenges_submissionArgs<ExtArgs> = {}>(args?: Subset<T, profile$targeted_challenges_submissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_submissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    targeted_challenges_votes<T extends profile$targeted_challenges_votesArgs<ExtArgs> = {}>(args?: Subset<T, profile$targeted_challenges_votesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_votesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * profile.open_challenge_submissions
   */
  export type profile$open_challenge_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsInclude<ExtArgs> | null
    where?: open_challenge_submissionsWhereInput
    orderBy?: open_challenge_submissionsOrderByWithRelationInput | open_challenge_submissionsOrderByWithRelationInput[]
    cursor?: open_challenge_submissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Open_challenge_submissionsScalarFieldEnum | Open_challenge_submissionsScalarFieldEnum[]
  }

  /**
   * profile.targeted_challenges_bets
   */
  export type profile$targeted_challenges_betsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsInclude<ExtArgs> | null
    where?: targeted_challenges_betsWhereInput
    orderBy?: targeted_challenges_betsOrderByWithRelationInput | targeted_challenges_betsOrderByWithRelationInput[]
    cursor?: targeted_challenges_betsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Targeted_challenges_betsScalarFieldEnum | Targeted_challenges_betsScalarFieldEnum[]
  }

  /**
   * profile.targeted_challenges_submission
   */
  export type profile$targeted_challenges_submissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionInclude<ExtArgs> | null
    where?: targeted_challenges_submissionWhereInput
    orderBy?: targeted_challenges_submissionOrderByWithRelationInput | targeted_challenges_submissionOrderByWithRelationInput[]
    cursor?: targeted_challenges_submissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Targeted_challenges_submissionScalarFieldEnum | Targeted_challenges_submissionScalarFieldEnum[]
  }

  /**
   * profile.targeted_challenges_votes
   */
  export type profile$targeted_challenges_votesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesInclude<ExtArgs> | null
    where?: targeted_challenges_votesWhereInput
    orderBy?: targeted_challenges_votesOrderByWithRelationInput | targeted_challenges_votesOrderByWithRelationInput[]
    cursor?: targeted_challenges_votesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Targeted_challenges_votesScalarFieldEnum | Targeted_challenges_votesScalarFieldEnum[]
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
   * Model open_challenge_submissions
   */

  export type AggregateOpen_challenge_submissions = {
    _count: Open_challenge_submissionsCountAggregateOutputType | null
    _avg: Open_challenge_submissionsAvgAggregateOutputType | null
    _sum: Open_challenge_submissionsSumAggregateOutputType | null
    _min: Open_challenge_submissionsMinAggregateOutputType | null
    _max: Open_challenge_submissionsMaxAggregateOutputType | null
  }

  export type Open_challenge_submissionsAvgAggregateOutputType = {
    open_submission_id: number | null
    challenge_id: number | null
  }

  export type Open_challenge_submissionsSumAggregateOutputType = {
    open_submission_id: number | null
    challenge_id: number | null
  }

  export type Open_challenge_submissionsMinAggregateOutputType = {
    open_submission_id: number | null
    challenge_id: number | null
    c_target: $Enums.c_target_type | null
    user_id: string | null
    media_url: string | null
    caption: string | null
    time_submitted: Date | null
  }

  export type Open_challenge_submissionsMaxAggregateOutputType = {
    open_submission_id: number | null
    challenge_id: number | null
    c_target: $Enums.c_target_type | null
    user_id: string | null
    media_url: string | null
    caption: string | null
    time_submitted: Date | null
  }

  export type Open_challenge_submissionsCountAggregateOutputType = {
    open_submission_id: number
    challenge_id: number
    c_target: number
    user_id: number
    media_url: number
    caption: number
    time_submitted: number
    _all: number
  }


  export type Open_challenge_submissionsAvgAggregateInputType = {
    open_submission_id?: true
    challenge_id?: true
  }

  export type Open_challenge_submissionsSumAggregateInputType = {
    open_submission_id?: true
    challenge_id?: true
  }

  export type Open_challenge_submissionsMinAggregateInputType = {
    open_submission_id?: true
    challenge_id?: true
    c_target?: true
    user_id?: true
    media_url?: true
    caption?: true
    time_submitted?: true
  }

  export type Open_challenge_submissionsMaxAggregateInputType = {
    open_submission_id?: true
    challenge_id?: true
    c_target?: true
    user_id?: true
    media_url?: true
    caption?: true
    time_submitted?: true
  }

  export type Open_challenge_submissionsCountAggregateInputType = {
    open_submission_id?: true
    challenge_id?: true
    c_target?: true
    user_id?: true
    media_url?: true
    caption?: true
    time_submitted?: true
    _all?: true
  }

  export type Open_challenge_submissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which open_challenge_submissions to aggregate.
     */
    where?: open_challenge_submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of open_challenge_submissions to fetch.
     */
    orderBy?: open_challenge_submissionsOrderByWithRelationInput | open_challenge_submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: open_challenge_submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` open_challenge_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` open_challenge_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned open_challenge_submissions
    **/
    _count?: true | Open_challenge_submissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Open_challenge_submissionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Open_challenge_submissionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Open_challenge_submissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Open_challenge_submissionsMaxAggregateInputType
  }

  export type GetOpen_challenge_submissionsAggregateType<T extends Open_challenge_submissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateOpen_challenge_submissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpen_challenge_submissions[P]>
      : GetScalarType<T[P], AggregateOpen_challenge_submissions[P]>
  }




  export type open_challenge_submissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: open_challenge_submissionsWhereInput
    orderBy?: open_challenge_submissionsOrderByWithAggregationInput | open_challenge_submissionsOrderByWithAggregationInput[]
    by: Open_challenge_submissionsScalarFieldEnum[] | Open_challenge_submissionsScalarFieldEnum
    having?: open_challenge_submissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Open_challenge_submissionsCountAggregateInputType | true
    _avg?: Open_challenge_submissionsAvgAggregateInputType
    _sum?: Open_challenge_submissionsSumAggregateInputType
    _min?: Open_challenge_submissionsMinAggregateInputType
    _max?: Open_challenge_submissionsMaxAggregateInputType
  }

  export type Open_challenge_submissionsGroupByOutputType = {
    open_submission_id: number
    challenge_id: number
    c_target: $Enums.c_target_type
    user_id: string
    media_url: string | null
    caption: string | null
    time_submitted: Date
    _count: Open_challenge_submissionsCountAggregateOutputType | null
    _avg: Open_challenge_submissionsAvgAggregateOutputType | null
    _sum: Open_challenge_submissionsSumAggregateOutputType | null
    _min: Open_challenge_submissionsMinAggregateOutputType | null
    _max: Open_challenge_submissionsMaxAggregateOutputType | null
  }

  type GetOpen_challenge_submissionsGroupByPayload<T extends open_challenge_submissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Open_challenge_submissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Open_challenge_submissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Open_challenge_submissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Open_challenge_submissionsGroupByOutputType[P]>
        }
      >
    >


  export type open_challenge_submissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    open_submission_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    user_id?: boolean
    media_url?: boolean
    caption?: boolean
    time_submitted?: boolean
    open_challenges?: boolean | open_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["open_challenge_submissions"]>

  export type open_challenge_submissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    open_submission_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    user_id?: boolean
    media_url?: boolean
    caption?: boolean
    time_submitted?: boolean
    open_challenges?: boolean | open_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["open_challenge_submissions"]>

  export type open_challenge_submissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    open_submission_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    user_id?: boolean
    media_url?: boolean
    caption?: boolean
    time_submitted?: boolean
    open_challenges?: boolean | open_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["open_challenge_submissions"]>

  export type open_challenge_submissionsSelectScalar = {
    open_submission_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    user_id?: boolean
    media_url?: boolean
    caption?: boolean
    time_submitted?: boolean
  }

  export type open_challenge_submissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"open_submission_id" | "challenge_id" | "c_target" | "user_id" | "media_url" | "caption" | "time_submitted", ExtArgs["result"]["open_challenge_submissions"]>
  export type open_challenge_submissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    open_challenges?: boolean | open_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }
  export type open_challenge_submissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    open_challenges?: boolean | open_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }
  export type open_challenge_submissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    open_challenges?: boolean | open_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }

  export type $open_challenge_submissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "open_challenge_submissions"
    objects: {
      open_challenges: Prisma.$open_challengesPayload<ExtArgs>
      profile: Prisma.$profilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      open_submission_id: number
      challenge_id: number
      c_target: $Enums.c_target_type
      user_id: string
      media_url: string | null
      caption: string | null
      time_submitted: Date
    }, ExtArgs["result"]["open_challenge_submissions"]>
    composites: {}
  }

  type open_challenge_submissionsGetPayload<S extends boolean | null | undefined | open_challenge_submissionsDefaultArgs> = $Result.GetResult<Prisma.$open_challenge_submissionsPayload, S>

  type open_challenge_submissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<open_challenge_submissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Open_challenge_submissionsCountAggregateInputType | true
    }

  export interface open_challenge_submissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['open_challenge_submissions'], meta: { name: 'open_challenge_submissions' } }
    /**
     * Find zero or one Open_challenge_submissions that matches the filter.
     * @param {open_challenge_submissionsFindUniqueArgs} args - Arguments to find a Open_challenge_submissions
     * @example
     * // Get one Open_challenge_submissions
     * const open_challenge_submissions = await prisma.open_challenge_submissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends open_challenge_submissionsFindUniqueArgs>(args: SelectSubset<T, open_challenge_submissionsFindUniqueArgs<ExtArgs>>): Prisma__open_challenge_submissionsClient<$Result.GetResult<Prisma.$open_challenge_submissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Open_challenge_submissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {open_challenge_submissionsFindUniqueOrThrowArgs} args - Arguments to find a Open_challenge_submissions
     * @example
     * // Get one Open_challenge_submissions
     * const open_challenge_submissions = await prisma.open_challenge_submissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends open_challenge_submissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, open_challenge_submissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__open_challenge_submissionsClient<$Result.GetResult<Prisma.$open_challenge_submissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Open_challenge_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {open_challenge_submissionsFindFirstArgs} args - Arguments to find a Open_challenge_submissions
     * @example
     * // Get one Open_challenge_submissions
     * const open_challenge_submissions = await prisma.open_challenge_submissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends open_challenge_submissionsFindFirstArgs>(args?: SelectSubset<T, open_challenge_submissionsFindFirstArgs<ExtArgs>>): Prisma__open_challenge_submissionsClient<$Result.GetResult<Prisma.$open_challenge_submissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Open_challenge_submissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {open_challenge_submissionsFindFirstOrThrowArgs} args - Arguments to find a Open_challenge_submissions
     * @example
     * // Get one Open_challenge_submissions
     * const open_challenge_submissions = await prisma.open_challenge_submissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends open_challenge_submissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, open_challenge_submissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__open_challenge_submissionsClient<$Result.GetResult<Prisma.$open_challenge_submissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Open_challenge_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {open_challenge_submissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Open_challenge_submissions
     * const open_challenge_submissions = await prisma.open_challenge_submissions.findMany()
     * 
     * // Get first 10 Open_challenge_submissions
     * const open_challenge_submissions = await prisma.open_challenge_submissions.findMany({ take: 10 })
     * 
     * // Only select the `open_submission_id`
     * const open_challenge_submissionsWithOpen_submission_idOnly = await prisma.open_challenge_submissions.findMany({ select: { open_submission_id: true } })
     * 
     */
    findMany<T extends open_challenge_submissionsFindManyArgs>(args?: SelectSubset<T, open_challenge_submissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$open_challenge_submissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Open_challenge_submissions.
     * @param {open_challenge_submissionsCreateArgs} args - Arguments to create a Open_challenge_submissions.
     * @example
     * // Create one Open_challenge_submissions
     * const Open_challenge_submissions = await prisma.open_challenge_submissions.create({
     *   data: {
     *     // ... data to create a Open_challenge_submissions
     *   }
     * })
     * 
     */
    create<T extends open_challenge_submissionsCreateArgs>(args: SelectSubset<T, open_challenge_submissionsCreateArgs<ExtArgs>>): Prisma__open_challenge_submissionsClient<$Result.GetResult<Prisma.$open_challenge_submissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Open_challenge_submissions.
     * @param {open_challenge_submissionsCreateManyArgs} args - Arguments to create many Open_challenge_submissions.
     * @example
     * // Create many Open_challenge_submissions
     * const open_challenge_submissions = await prisma.open_challenge_submissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends open_challenge_submissionsCreateManyArgs>(args?: SelectSubset<T, open_challenge_submissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Open_challenge_submissions and returns the data saved in the database.
     * @param {open_challenge_submissionsCreateManyAndReturnArgs} args - Arguments to create many Open_challenge_submissions.
     * @example
     * // Create many Open_challenge_submissions
     * const open_challenge_submissions = await prisma.open_challenge_submissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Open_challenge_submissions and only return the `open_submission_id`
     * const open_challenge_submissionsWithOpen_submission_idOnly = await prisma.open_challenge_submissions.createManyAndReturn({
     *   select: { open_submission_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends open_challenge_submissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, open_challenge_submissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$open_challenge_submissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Open_challenge_submissions.
     * @param {open_challenge_submissionsDeleteArgs} args - Arguments to delete one Open_challenge_submissions.
     * @example
     * // Delete one Open_challenge_submissions
     * const Open_challenge_submissions = await prisma.open_challenge_submissions.delete({
     *   where: {
     *     // ... filter to delete one Open_challenge_submissions
     *   }
     * })
     * 
     */
    delete<T extends open_challenge_submissionsDeleteArgs>(args: SelectSubset<T, open_challenge_submissionsDeleteArgs<ExtArgs>>): Prisma__open_challenge_submissionsClient<$Result.GetResult<Prisma.$open_challenge_submissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Open_challenge_submissions.
     * @param {open_challenge_submissionsUpdateArgs} args - Arguments to update one Open_challenge_submissions.
     * @example
     * // Update one Open_challenge_submissions
     * const open_challenge_submissions = await prisma.open_challenge_submissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends open_challenge_submissionsUpdateArgs>(args: SelectSubset<T, open_challenge_submissionsUpdateArgs<ExtArgs>>): Prisma__open_challenge_submissionsClient<$Result.GetResult<Prisma.$open_challenge_submissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Open_challenge_submissions.
     * @param {open_challenge_submissionsDeleteManyArgs} args - Arguments to filter Open_challenge_submissions to delete.
     * @example
     * // Delete a few Open_challenge_submissions
     * const { count } = await prisma.open_challenge_submissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends open_challenge_submissionsDeleteManyArgs>(args?: SelectSubset<T, open_challenge_submissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Open_challenge_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {open_challenge_submissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Open_challenge_submissions
     * const open_challenge_submissions = await prisma.open_challenge_submissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends open_challenge_submissionsUpdateManyArgs>(args: SelectSubset<T, open_challenge_submissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Open_challenge_submissions and returns the data updated in the database.
     * @param {open_challenge_submissionsUpdateManyAndReturnArgs} args - Arguments to update many Open_challenge_submissions.
     * @example
     * // Update many Open_challenge_submissions
     * const open_challenge_submissions = await prisma.open_challenge_submissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Open_challenge_submissions and only return the `open_submission_id`
     * const open_challenge_submissionsWithOpen_submission_idOnly = await prisma.open_challenge_submissions.updateManyAndReturn({
     *   select: { open_submission_id: true },
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
    updateManyAndReturn<T extends open_challenge_submissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, open_challenge_submissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$open_challenge_submissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Open_challenge_submissions.
     * @param {open_challenge_submissionsUpsertArgs} args - Arguments to update or create a Open_challenge_submissions.
     * @example
     * // Update or create a Open_challenge_submissions
     * const open_challenge_submissions = await prisma.open_challenge_submissions.upsert({
     *   create: {
     *     // ... data to create a Open_challenge_submissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Open_challenge_submissions we want to update
     *   }
     * })
     */
    upsert<T extends open_challenge_submissionsUpsertArgs>(args: SelectSubset<T, open_challenge_submissionsUpsertArgs<ExtArgs>>): Prisma__open_challenge_submissionsClient<$Result.GetResult<Prisma.$open_challenge_submissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Open_challenge_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {open_challenge_submissionsCountArgs} args - Arguments to filter Open_challenge_submissions to count.
     * @example
     * // Count the number of Open_challenge_submissions
     * const count = await prisma.open_challenge_submissions.count({
     *   where: {
     *     // ... the filter for the Open_challenge_submissions we want to count
     *   }
     * })
    **/
    count<T extends open_challenge_submissionsCountArgs>(
      args?: Subset<T, open_challenge_submissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Open_challenge_submissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Open_challenge_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Open_challenge_submissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Open_challenge_submissionsAggregateArgs>(args: Subset<T, Open_challenge_submissionsAggregateArgs>): Prisma.PrismaPromise<GetOpen_challenge_submissionsAggregateType<T>>

    /**
     * Group by Open_challenge_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {open_challenge_submissionsGroupByArgs} args - Group by arguments.
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
      T extends open_challenge_submissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: open_challenge_submissionsGroupByArgs['orderBy'] }
        : { orderBy?: open_challenge_submissionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, open_challenge_submissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpen_challenge_submissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the open_challenge_submissions model
   */
  readonly fields: open_challenge_submissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for open_challenge_submissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__open_challenge_submissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    open_challenges<T extends open_challengesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, open_challengesDefaultArgs<ExtArgs>>): Prisma__open_challengesClient<$Result.GetResult<Prisma.$open_challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the open_challenge_submissions model
   */
  interface open_challenge_submissionsFieldRefs {
    readonly open_submission_id: FieldRef<"open_challenge_submissions", 'Int'>
    readonly challenge_id: FieldRef<"open_challenge_submissions", 'Int'>
    readonly c_target: FieldRef<"open_challenge_submissions", 'c_target_type'>
    readonly user_id: FieldRef<"open_challenge_submissions", 'String'>
    readonly media_url: FieldRef<"open_challenge_submissions", 'String'>
    readonly caption: FieldRef<"open_challenge_submissions", 'String'>
    readonly time_submitted: FieldRef<"open_challenge_submissions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * open_challenge_submissions findUnique
   */
  export type open_challenge_submissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which open_challenge_submissions to fetch.
     */
    where: open_challenge_submissionsWhereUniqueInput
  }

  /**
   * open_challenge_submissions findUniqueOrThrow
   */
  export type open_challenge_submissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which open_challenge_submissions to fetch.
     */
    where: open_challenge_submissionsWhereUniqueInput
  }

  /**
   * open_challenge_submissions findFirst
   */
  export type open_challenge_submissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which open_challenge_submissions to fetch.
     */
    where?: open_challenge_submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of open_challenge_submissions to fetch.
     */
    orderBy?: open_challenge_submissionsOrderByWithRelationInput | open_challenge_submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for open_challenge_submissions.
     */
    cursor?: open_challenge_submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` open_challenge_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` open_challenge_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of open_challenge_submissions.
     */
    distinct?: Open_challenge_submissionsScalarFieldEnum | Open_challenge_submissionsScalarFieldEnum[]
  }

  /**
   * open_challenge_submissions findFirstOrThrow
   */
  export type open_challenge_submissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which open_challenge_submissions to fetch.
     */
    where?: open_challenge_submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of open_challenge_submissions to fetch.
     */
    orderBy?: open_challenge_submissionsOrderByWithRelationInput | open_challenge_submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for open_challenge_submissions.
     */
    cursor?: open_challenge_submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` open_challenge_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` open_challenge_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of open_challenge_submissions.
     */
    distinct?: Open_challenge_submissionsScalarFieldEnum | Open_challenge_submissionsScalarFieldEnum[]
  }

  /**
   * open_challenge_submissions findMany
   */
  export type open_challenge_submissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter, which open_challenge_submissions to fetch.
     */
    where?: open_challenge_submissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of open_challenge_submissions to fetch.
     */
    orderBy?: open_challenge_submissionsOrderByWithRelationInput | open_challenge_submissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing open_challenge_submissions.
     */
    cursor?: open_challenge_submissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` open_challenge_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` open_challenge_submissions.
     */
    skip?: number
    distinct?: Open_challenge_submissionsScalarFieldEnum | Open_challenge_submissionsScalarFieldEnum[]
  }

  /**
   * open_challenge_submissions create
   */
  export type open_challenge_submissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a open_challenge_submissions.
     */
    data: XOR<open_challenge_submissionsCreateInput, open_challenge_submissionsUncheckedCreateInput>
  }

  /**
   * open_challenge_submissions createMany
   */
  export type open_challenge_submissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many open_challenge_submissions.
     */
    data: open_challenge_submissionsCreateManyInput | open_challenge_submissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * open_challenge_submissions createManyAndReturn
   */
  export type open_challenge_submissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * The data used to create many open_challenge_submissions.
     */
    data: open_challenge_submissionsCreateManyInput | open_challenge_submissionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * open_challenge_submissions update
   */
  export type open_challenge_submissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a open_challenge_submissions.
     */
    data: XOR<open_challenge_submissionsUpdateInput, open_challenge_submissionsUncheckedUpdateInput>
    /**
     * Choose, which open_challenge_submissions to update.
     */
    where: open_challenge_submissionsWhereUniqueInput
  }

  /**
   * open_challenge_submissions updateMany
   */
  export type open_challenge_submissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update open_challenge_submissions.
     */
    data: XOR<open_challenge_submissionsUpdateManyMutationInput, open_challenge_submissionsUncheckedUpdateManyInput>
    /**
     * Filter which open_challenge_submissions to update
     */
    where?: open_challenge_submissionsWhereInput
    /**
     * Limit how many open_challenge_submissions to update.
     */
    limit?: number
  }

  /**
   * open_challenge_submissions updateManyAndReturn
   */
  export type open_challenge_submissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * The data used to update open_challenge_submissions.
     */
    data: XOR<open_challenge_submissionsUpdateManyMutationInput, open_challenge_submissionsUncheckedUpdateManyInput>
    /**
     * Filter which open_challenge_submissions to update
     */
    where?: open_challenge_submissionsWhereInput
    /**
     * Limit how many open_challenge_submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * open_challenge_submissions upsert
   */
  export type open_challenge_submissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the open_challenge_submissions to update in case it exists.
     */
    where: open_challenge_submissionsWhereUniqueInput
    /**
     * In case the open_challenge_submissions found by the `where` argument doesn't exist, create a new open_challenge_submissions with this data.
     */
    create: XOR<open_challenge_submissionsCreateInput, open_challenge_submissionsUncheckedCreateInput>
    /**
     * In case the open_challenge_submissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<open_challenge_submissionsUpdateInput, open_challenge_submissionsUncheckedUpdateInput>
  }

  /**
   * open_challenge_submissions delete
   */
  export type open_challenge_submissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsInclude<ExtArgs> | null
    /**
     * Filter which open_challenge_submissions to delete.
     */
    where: open_challenge_submissionsWhereUniqueInput
  }

  /**
   * open_challenge_submissions deleteMany
   */
  export type open_challenge_submissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which open_challenge_submissions to delete
     */
    where?: open_challenge_submissionsWhereInput
    /**
     * Limit how many open_challenge_submissions to delete.
     */
    limit?: number
  }

  /**
   * open_challenge_submissions without action
   */
  export type open_challenge_submissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the open_challenge_submissions
     */
    select?: open_challenge_submissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the open_challenge_submissions
     */
    omit?: open_challenge_submissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: open_challenge_submissionsInclude<ExtArgs> | null
  }


  /**
   * Model targeted_challenges_bets
   */

  export type AggregateTargeted_challenges_bets = {
    _count: Targeted_challenges_betsCountAggregateOutputType | null
    _avg: Targeted_challenges_betsAvgAggregateOutputType | null
    _sum: Targeted_challenges_betsSumAggregateOutputType | null
    _min: Targeted_challenges_betsMinAggregateOutputType | null
    _max: Targeted_challenges_betsMaxAggregateOutputType | null
  }

  export type Targeted_challenges_betsAvgAggregateOutputType = {
    bet_id: number | null
    challenge_id: number | null
    bet_magnitude: number | null
  }

  export type Targeted_challenges_betsSumAggregateOutputType = {
    bet_id: number | null
    challenge_id: number | null
    bet_magnitude: number | null
  }

  export type Targeted_challenges_betsMinAggregateOutputType = {
    bet_id: number | null
    challenge_id: number | null
    c_target: $Enums.c_target_type | null
    bet_direction: $Enums.cast_direction | null
    bet_magnitude: number | null
    bettor_id: string | null
  }

  export type Targeted_challenges_betsMaxAggregateOutputType = {
    bet_id: number | null
    challenge_id: number | null
    c_target: $Enums.c_target_type | null
    bet_direction: $Enums.cast_direction | null
    bet_magnitude: number | null
    bettor_id: string | null
  }

  export type Targeted_challenges_betsCountAggregateOutputType = {
    bet_id: number
    challenge_id: number
    c_target: number
    bet_direction: number
    bet_magnitude: number
    bettor_id: number
    _all: number
  }


  export type Targeted_challenges_betsAvgAggregateInputType = {
    bet_id?: true
    challenge_id?: true
    bet_magnitude?: true
  }

  export type Targeted_challenges_betsSumAggregateInputType = {
    bet_id?: true
    challenge_id?: true
    bet_magnitude?: true
  }

  export type Targeted_challenges_betsMinAggregateInputType = {
    bet_id?: true
    challenge_id?: true
    c_target?: true
    bet_direction?: true
    bet_magnitude?: true
    bettor_id?: true
  }

  export type Targeted_challenges_betsMaxAggregateInputType = {
    bet_id?: true
    challenge_id?: true
    c_target?: true
    bet_direction?: true
    bet_magnitude?: true
    bettor_id?: true
  }

  export type Targeted_challenges_betsCountAggregateInputType = {
    bet_id?: true
    challenge_id?: true
    c_target?: true
    bet_direction?: true
    bet_magnitude?: true
    bettor_id?: true
    _all?: true
  }

  export type Targeted_challenges_betsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which targeted_challenges_bets to aggregate.
     */
    where?: targeted_challenges_betsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges_bets to fetch.
     */
    orderBy?: targeted_challenges_betsOrderByWithRelationInput | targeted_challenges_betsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: targeted_challenges_betsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges_bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges_bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned targeted_challenges_bets
    **/
    _count?: true | Targeted_challenges_betsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Targeted_challenges_betsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Targeted_challenges_betsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Targeted_challenges_betsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Targeted_challenges_betsMaxAggregateInputType
  }

  export type GetTargeted_challenges_betsAggregateType<T extends Targeted_challenges_betsAggregateArgs> = {
        [P in keyof T & keyof AggregateTargeted_challenges_bets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTargeted_challenges_bets[P]>
      : GetScalarType<T[P], AggregateTargeted_challenges_bets[P]>
  }




  export type targeted_challenges_betsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: targeted_challenges_betsWhereInput
    orderBy?: targeted_challenges_betsOrderByWithAggregationInput | targeted_challenges_betsOrderByWithAggregationInput[]
    by: Targeted_challenges_betsScalarFieldEnum[] | Targeted_challenges_betsScalarFieldEnum
    having?: targeted_challenges_betsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Targeted_challenges_betsCountAggregateInputType | true
    _avg?: Targeted_challenges_betsAvgAggregateInputType
    _sum?: Targeted_challenges_betsSumAggregateInputType
    _min?: Targeted_challenges_betsMinAggregateInputType
    _max?: Targeted_challenges_betsMaxAggregateInputType
  }

  export type Targeted_challenges_betsGroupByOutputType = {
    bet_id: number
    challenge_id: number
    c_target: $Enums.c_target_type
    bet_direction: $Enums.cast_direction
    bet_magnitude: number
    bettor_id: string
    _count: Targeted_challenges_betsCountAggregateOutputType | null
    _avg: Targeted_challenges_betsAvgAggregateOutputType | null
    _sum: Targeted_challenges_betsSumAggregateOutputType | null
    _min: Targeted_challenges_betsMinAggregateOutputType | null
    _max: Targeted_challenges_betsMaxAggregateOutputType | null
  }

  type GetTargeted_challenges_betsGroupByPayload<T extends targeted_challenges_betsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Targeted_challenges_betsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Targeted_challenges_betsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Targeted_challenges_betsGroupByOutputType[P]>
            : GetScalarType<T[P], Targeted_challenges_betsGroupByOutputType[P]>
        }
      >
    >


  export type targeted_challenges_betsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bet_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    bet_direction?: boolean
    bet_magnitude?: boolean
    bettor_id?: boolean
    profile?: boolean | profileDefaultArgs<ExtArgs>
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges_bets"]>

  export type targeted_challenges_betsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bet_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    bet_direction?: boolean
    bet_magnitude?: boolean
    bettor_id?: boolean
    profile?: boolean | profileDefaultArgs<ExtArgs>
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges_bets"]>

  export type targeted_challenges_betsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    bet_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    bet_direction?: boolean
    bet_magnitude?: boolean
    bettor_id?: boolean
    profile?: boolean | profileDefaultArgs<ExtArgs>
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges_bets"]>

  export type targeted_challenges_betsSelectScalar = {
    bet_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    bet_direction?: boolean
    bet_magnitude?: boolean
    bettor_id?: boolean
  }

  export type targeted_challenges_betsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"bet_id" | "challenge_id" | "c_target" | "bet_direction" | "bet_magnitude" | "bettor_id", ExtArgs["result"]["targeted_challenges_bets"]>
  export type targeted_challenges_betsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | profileDefaultArgs<ExtArgs>
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
  }
  export type targeted_challenges_betsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | profileDefaultArgs<ExtArgs>
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
  }
  export type targeted_challenges_betsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | profileDefaultArgs<ExtArgs>
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
  }

  export type $targeted_challenges_betsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "targeted_challenges_bets"
    objects: {
      profile: Prisma.$profilePayload<ExtArgs>
      targeted_challenges: Prisma.$targeted_challengesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      bet_id: number
      challenge_id: number
      c_target: $Enums.c_target_type
      bet_direction: $Enums.cast_direction
      bet_magnitude: number
      bettor_id: string
    }, ExtArgs["result"]["targeted_challenges_bets"]>
    composites: {}
  }

  type targeted_challenges_betsGetPayload<S extends boolean | null | undefined | targeted_challenges_betsDefaultArgs> = $Result.GetResult<Prisma.$targeted_challenges_betsPayload, S>

  type targeted_challenges_betsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<targeted_challenges_betsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Targeted_challenges_betsCountAggregateInputType | true
    }

  export interface targeted_challenges_betsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['targeted_challenges_bets'], meta: { name: 'targeted_challenges_bets' } }
    /**
     * Find zero or one Targeted_challenges_bets that matches the filter.
     * @param {targeted_challenges_betsFindUniqueArgs} args - Arguments to find a Targeted_challenges_bets
     * @example
     * // Get one Targeted_challenges_bets
     * const targeted_challenges_bets = await prisma.targeted_challenges_bets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends targeted_challenges_betsFindUniqueArgs>(args: SelectSubset<T, targeted_challenges_betsFindUniqueArgs<ExtArgs>>): Prisma__targeted_challenges_betsClient<$Result.GetResult<Prisma.$targeted_challenges_betsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Targeted_challenges_bets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {targeted_challenges_betsFindUniqueOrThrowArgs} args - Arguments to find a Targeted_challenges_bets
     * @example
     * // Get one Targeted_challenges_bets
     * const targeted_challenges_bets = await prisma.targeted_challenges_bets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends targeted_challenges_betsFindUniqueOrThrowArgs>(args: SelectSubset<T, targeted_challenges_betsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__targeted_challenges_betsClient<$Result.GetResult<Prisma.$targeted_challenges_betsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Targeted_challenges_bets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_betsFindFirstArgs} args - Arguments to find a Targeted_challenges_bets
     * @example
     * // Get one Targeted_challenges_bets
     * const targeted_challenges_bets = await prisma.targeted_challenges_bets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends targeted_challenges_betsFindFirstArgs>(args?: SelectSubset<T, targeted_challenges_betsFindFirstArgs<ExtArgs>>): Prisma__targeted_challenges_betsClient<$Result.GetResult<Prisma.$targeted_challenges_betsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Targeted_challenges_bets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_betsFindFirstOrThrowArgs} args - Arguments to find a Targeted_challenges_bets
     * @example
     * // Get one Targeted_challenges_bets
     * const targeted_challenges_bets = await prisma.targeted_challenges_bets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends targeted_challenges_betsFindFirstOrThrowArgs>(args?: SelectSubset<T, targeted_challenges_betsFindFirstOrThrowArgs<ExtArgs>>): Prisma__targeted_challenges_betsClient<$Result.GetResult<Prisma.$targeted_challenges_betsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Targeted_challenges_bets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_betsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Targeted_challenges_bets
     * const targeted_challenges_bets = await prisma.targeted_challenges_bets.findMany()
     * 
     * // Get first 10 Targeted_challenges_bets
     * const targeted_challenges_bets = await prisma.targeted_challenges_bets.findMany({ take: 10 })
     * 
     * // Only select the `bet_id`
     * const targeted_challenges_betsWithBet_idOnly = await prisma.targeted_challenges_bets.findMany({ select: { bet_id: true } })
     * 
     */
    findMany<T extends targeted_challenges_betsFindManyArgs>(args?: SelectSubset<T, targeted_challenges_betsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_betsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Targeted_challenges_bets.
     * @param {targeted_challenges_betsCreateArgs} args - Arguments to create a Targeted_challenges_bets.
     * @example
     * // Create one Targeted_challenges_bets
     * const Targeted_challenges_bets = await prisma.targeted_challenges_bets.create({
     *   data: {
     *     // ... data to create a Targeted_challenges_bets
     *   }
     * })
     * 
     */
    create<T extends targeted_challenges_betsCreateArgs>(args: SelectSubset<T, targeted_challenges_betsCreateArgs<ExtArgs>>): Prisma__targeted_challenges_betsClient<$Result.GetResult<Prisma.$targeted_challenges_betsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Targeted_challenges_bets.
     * @param {targeted_challenges_betsCreateManyArgs} args - Arguments to create many Targeted_challenges_bets.
     * @example
     * // Create many Targeted_challenges_bets
     * const targeted_challenges_bets = await prisma.targeted_challenges_bets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends targeted_challenges_betsCreateManyArgs>(args?: SelectSubset<T, targeted_challenges_betsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Targeted_challenges_bets and returns the data saved in the database.
     * @param {targeted_challenges_betsCreateManyAndReturnArgs} args - Arguments to create many Targeted_challenges_bets.
     * @example
     * // Create many Targeted_challenges_bets
     * const targeted_challenges_bets = await prisma.targeted_challenges_bets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Targeted_challenges_bets and only return the `bet_id`
     * const targeted_challenges_betsWithBet_idOnly = await prisma.targeted_challenges_bets.createManyAndReturn({
     *   select: { bet_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends targeted_challenges_betsCreateManyAndReturnArgs>(args?: SelectSubset<T, targeted_challenges_betsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_betsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Targeted_challenges_bets.
     * @param {targeted_challenges_betsDeleteArgs} args - Arguments to delete one Targeted_challenges_bets.
     * @example
     * // Delete one Targeted_challenges_bets
     * const Targeted_challenges_bets = await prisma.targeted_challenges_bets.delete({
     *   where: {
     *     // ... filter to delete one Targeted_challenges_bets
     *   }
     * })
     * 
     */
    delete<T extends targeted_challenges_betsDeleteArgs>(args: SelectSubset<T, targeted_challenges_betsDeleteArgs<ExtArgs>>): Prisma__targeted_challenges_betsClient<$Result.GetResult<Prisma.$targeted_challenges_betsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Targeted_challenges_bets.
     * @param {targeted_challenges_betsUpdateArgs} args - Arguments to update one Targeted_challenges_bets.
     * @example
     * // Update one Targeted_challenges_bets
     * const targeted_challenges_bets = await prisma.targeted_challenges_bets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends targeted_challenges_betsUpdateArgs>(args: SelectSubset<T, targeted_challenges_betsUpdateArgs<ExtArgs>>): Prisma__targeted_challenges_betsClient<$Result.GetResult<Prisma.$targeted_challenges_betsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Targeted_challenges_bets.
     * @param {targeted_challenges_betsDeleteManyArgs} args - Arguments to filter Targeted_challenges_bets to delete.
     * @example
     * // Delete a few Targeted_challenges_bets
     * const { count } = await prisma.targeted_challenges_bets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends targeted_challenges_betsDeleteManyArgs>(args?: SelectSubset<T, targeted_challenges_betsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Targeted_challenges_bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_betsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Targeted_challenges_bets
     * const targeted_challenges_bets = await prisma.targeted_challenges_bets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends targeted_challenges_betsUpdateManyArgs>(args: SelectSubset<T, targeted_challenges_betsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Targeted_challenges_bets and returns the data updated in the database.
     * @param {targeted_challenges_betsUpdateManyAndReturnArgs} args - Arguments to update many Targeted_challenges_bets.
     * @example
     * // Update many Targeted_challenges_bets
     * const targeted_challenges_bets = await prisma.targeted_challenges_bets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Targeted_challenges_bets and only return the `bet_id`
     * const targeted_challenges_betsWithBet_idOnly = await prisma.targeted_challenges_bets.updateManyAndReturn({
     *   select: { bet_id: true },
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
    updateManyAndReturn<T extends targeted_challenges_betsUpdateManyAndReturnArgs>(args: SelectSubset<T, targeted_challenges_betsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_betsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Targeted_challenges_bets.
     * @param {targeted_challenges_betsUpsertArgs} args - Arguments to update or create a Targeted_challenges_bets.
     * @example
     * // Update or create a Targeted_challenges_bets
     * const targeted_challenges_bets = await prisma.targeted_challenges_bets.upsert({
     *   create: {
     *     // ... data to create a Targeted_challenges_bets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Targeted_challenges_bets we want to update
     *   }
     * })
     */
    upsert<T extends targeted_challenges_betsUpsertArgs>(args: SelectSubset<T, targeted_challenges_betsUpsertArgs<ExtArgs>>): Prisma__targeted_challenges_betsClient<$Result.GetResult<Prisma.$targeted_challenges_betsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Targeted_challenges_bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_betsCountArgs} args - Arguments to filter Targeted_challenges_bets to count.
     * @example
     * // Count the number of Targeted_challenges_bets
     * const count = await prisma.targeted_challenges_bets.count({
     *   where: {
     *     // ... the filter for the Targeted_challenges_bets we want to count
     *   }
     * })
    **/
    count<T extends targeted_challenges_betsCountArgs>(
      args?: Subset<T, targeted_challenges_betsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Targeted_challenges_betsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Targeted_challenges_bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Targeted_challenges_betsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Targeted_challenges_betsAggregateArgs>(args: Subset<T, Targeted_challenges_betsAggregateArgs>): Prisma.PrismaPromise<GetTargeted_challenges_betsAggregateType<T>>

    /**
     * Group by Targeted_challenges_bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_betsGroupByArgs} args - Group by arguments.
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
      T extends targeted_challenges_betsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: targeted_challenges_betsGroupByArgs['orderBy'] }
        : { orderBy?: targeted_challenges_betsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, targeted_challenges_betsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTargeted_challenges_betsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the targeted_challenges_bets model
   */
  readonly fields: targeted_challenges_betsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for targeted_challenges_bets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__targeted_challenges_betsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends profileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, profileDefaultArgs<ExtArgs>>): Prisma__profileClient<$Result.GetResult<Prisma.$profilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    targeted_challenges<T extends targeted_challengesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, targeted_challengesDefaultArgs<ExtArgs>>): Prisma__targeted_challengesClient<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the targeted_challenges_bets model
   */
  interface targeted_challenges_betsFieldRefs {
    readonly bet_id: FieldRef<"targeted_challenges_bets", 'Int'>
    readonly challenge_id: FieldRef<"targeted_challenges_bets", 'Int'>
    readonly c_target: FieldRef<"targeted_challenges_bets", 'c_target_type'>
    readonly bet_direction: FieldRef<"targeted_challenges_bets", 'cast_direction'>
    readonly bet_magnitude: FieldRef<"targeted_challenges_bets", 'Int'>
    readonly bettor_id: FieldRef<"targeted_challenges_bets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * targeted_challenges_bets findUnique
   */
  export type targeted_challenges_betsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_bets to fetch.
     */
    where: targeted_challenges_betsWhereUniqueInput
  }

  /**
   * targeted_challenges_bets findUniqueOrThrow
   */
  export type targeted_challenges_betsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_bets to fetch.
     */
    where: targeted_challenges_betsWhereUniqueInput
  }

  /**
   * targeted_challenges_bets findFirst
   */
  export type targeted_challenges_betsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_bets to fetch.
     */
    where?: targeted_challenges_betsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges_bets to fetch.
     */
    orderBy?: targeted_challenges_betsOrderByWithRelationInput | targeted_challenges_betsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for targeted_challenges_bets.
     */
    cursor?: targeted_challenges_betsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges_bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges_bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of targeted_challenges_bets.
     */
    distinct?: Targeted_challenges_betsScalarFieldEnum | Targeted_challenges_betsScalarFieldEnum[]
  }

  /**
   * targeted_challenges_bets findFirstOrThrow
   */
  export type targeted_challenges_betsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_bets to fetch.
     */
    where?: targeted_challenges_betsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges_bets to fetch.
     */
    orderBy?: targeted_challenges_betsOrderByWithRelationInput | targeted_challenges_betsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for targeted_challenges_bets.
     */
    cursor?: targeted_challenges_betsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges_bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges_bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of targeted_challenges_bets.
     */
    distinct?: Targeted_challenges_betsScalarFieldEnum | Targeted_challenges_betsScalarFieldEnum[]
  }

  /**
   * targeted_challenges_bets findMany
   */
  export type targeted_challenges_betsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_bets to fetch.
     */
    where?: targeted_challenges_betsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges_bets to fetch.
     */
    orderBy?: targeted_challenges_betsOrderByWithRelationInput | targeted_challenges_betsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing targeted_challenges_bets.
     */
    cursor?: targeted_challenges_betsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges_bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges_bets.
     */
    skip?: number
    distinct?: Targeted_challenges_betsScalarFieldEnum | Targeted_challenges_betsScalarFieldEnum[]
  }

  /**
   * targeted_challenges_bets create
   */
  export type targeted_challenges_betsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsInclude<ExtArgs> | null
    /**
     * The data needed to create a targeted_challenges_bets.
     */
    data: XOR<targeted_challenges_betsCreateInput, targeted_challenges_betsUncheckedCreateInput>
  }

  /**
   * targeted_challenges_bets createMany
   */
  export type targeted_challenges_betsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many targeted_challenges_bets.
     */
    data: targeted_challenges_betsCreateManyInput | targeted_challenges_betsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * targeted_challenges_bets createManyAndReturn
   */
  export type targeted_challenges_betsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * The data used to create many targeted_challenges_bets.
     */
    data: targeted_challenges_betsCreateManyInput | targeted_challenges_betsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * targeted_challenges_bets update
   */
  export type targeted_challenges_betsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsInclude<ExtArgs> | null
    /**
     * The data needed to update a targeted_challenges_bets.
     */
    data: XOR<targeted_challenges_betsUpdateInput, targeted_challenges_betsUncheckedUpdateInput>
    /**
     * Choose, which targeted_challenges_bets to update.
     */
    where: targeted_challenges_betsWhereUniqueInput
  }

  /**
   * targeted_challenges_bets updateMany
   */
  export type targeted_challenges_betsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update targeted_challenges_bets.
     */
    data: XOR<targeted_challenges_betsUpdateManyMutationInput, targeted_challenges_betsUncheckedUpdateManyInput>
    /**
     * Filter which targeted_challenges_bets to update
     */
    where?: targeted_challenges_betsWhereInput
    /**
     * Limit how many targeted_challenges_bets to update.
     */
    limit?: number
  }

  /**
   * targeted_challenges_bets updateManyAndReturn
   */
  export type targeted_challenges_betsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * The data used to update targeted_challenges_bets.
     */
    data: XOR<targeted_challenges_betsUpdateManyMutationInput, targeted_challenges_betsUncheckedUpdateManyInput>
    /**
     * Filter which targeted_challenges_bets to update
     */
    where?: targeted_challenges_betsWhereInput
    /**
     * Limit how many targeted_challenges_bets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * targeted_challenges_bets upsert
   */
  export type targeted_challenges_betsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsInclude<ExtArgs> | null
    /**
     * The filter to search for the targeted_challenges_bets to update in case it exists.
     */
    where: targeted_challenges_betsWhereUniqueInput
    /**
     * In case the targeted_challenges_bets found by the `where` argument doesn't exist, create a new targeted_challenges_bets with this data.
     */
    create: XOR<targeted_challenges_betsCreateInput, targeted_challenges_betsUncheckedCreateInput>
    /**
     * In case the targeted_challenges_bets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<targeted_challenges_betsUpdateInput, targeted_challenges_betsUncheckedUpdateInput>
  }

  /**
   * targeted_challenges_bets delete
   */
  export type targeted_challenges_betsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsInclude<ExtArgs> | null
    /**
     * Filter which targeted_challenges_bets to delete.
     */
    where: targeted_challenges_betsWhereUniqueInput
  }

  /**
   * targeted_challenges_bets deleteMany
   */
  export type targeted_challenges_betsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which targeted_challenges_bets to delete
     */
    where?: targeted_challenges_betsWhereInput
    /**
     * Limit how many targeted_challenges_bets to delete.
     */
    limit?: number
  }

  /**
   * targeted_challenges_bets without action
   */
  export type targeted_challenges_betsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_bets
     */
    select?: targeted_challenges_betsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_bets
     */
    omit?: targeted_challenges_betsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_betsInclude<ExtArgs> | null
  }


  /**
   * Model targeted_challenges_submission
   */

  export type AggregateTargeted_challenges_submission = {
    _count: Targeted_challenges_submissionCountAggregateOutputType | null
    _avg: Targeted_challenges_submissionAvgAggregateOutputType | null
    _sum: Targeted_challenges_submissionSumAggregateOutputType | null
    _min: Targeted_challenges_submissionMinAggregateOutputType | null
    _max: Targeted_challenges_submissionMaxAggregateOutputType | null
  }

  export type Targeted_challenges_submissionAvgAggregateOutputType = {
    submission_id: number | null
    challenge_id: number | null
  }

  export type Targeted_challenges_submissionSumAggregateOutputType = {
    submission_id: number | null
    challenge_id: number | null
  }

  export type Targeted_challenges_submissionMinAggregateOutputType = {
    submission_id: number | null
    challenge_id: number | null
    c_target: $Enums.c_target_type | null
    submitter_id: string | null
    media_url: string | null
    caption: string | null
    time_submitted: Date | null
  }

  export type Targeted_challenges_submissionMaxAggregateOutputType = {
    submission_id: number | null
    challenge_id: number | null
    c_target: $Enums.c_target_type | null
    submitter_id: string | null
    media_url: string | null
    caption: string | null
    time_submitted: Date | null
  }

  export type Targeted_challenges_submissionCountAggregateOutputType = {
    submission_id: number
    challenge_id: number
    c_target: number
    submitter_id: number
    media_url: number
    caption: number
    time_submitted: number
    _all: number
  }


  export type Targeted_challenges_submissionAvgAggregateInputType = {
    submission_id?: true
    challenge_id?: true
  }

  export type Targeted_challenges_submissionSumAggregateInputType = {
    submission_id?: true
    challenge_id?: true
  }

  export type Targeted_challenges_submissionMinAggregateInputType = {
    submission_id?: true
    challenge_id?: true
    c_target?: true
    submitter_id?: true
    media_url?: true
    caption?: true
    time_submitted?: true
  }

  export type Targeted_challenges_submissionMaxAggregateInputType = {
    submission_id?: true
    challenge_id?: true
    c_target?: true
    submitter_id?: true
    media_url?: true
    caption?: true
    time_submitted?: true
  }

  export type Targeted_challenges_submissionCountAggregateInputType = {
    submission_id?: true
    challenge_id?: true
    c_target?: true
    submitter_id?: true
    media_url?: true
    caption?: true
    time_submitted?: true
    _all?: true
  }

  export type Targeted_challenges_submissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which targeted_challenges_submission to aggregate.
     */
    where?: targeted_challenges_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges_submissions to fetch.
     */
    orderBy?: targeted_challenges_submissionOrderByWithRelationInput | targeted_challenges_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: targeted_challenges_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned targeted_challenges_submissions
    **/
    _count?: true | Targeted_challenges_submissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Targeted_challenges_submissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Targeted_challenges_submissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Targeted_challenges_submissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Targeted_challenges_submissionMaxAggregateInputType
  }

  export type GetTargeted_challenges_submissionAggregateType<T extends Targeted_challenges_submissionAggregateArgs> = {
        [P in keyof T & keyof AggregateTargeted_challenges_submission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTargeted_challenges_submission[P]>
      : GetScalarType<T[P], AggregateTargeted_challenges_submission[P]>
  }




  export type targeted_challenges_submissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: targeted_challenges_submissionWhereInput
    orderBy?: targeted_challenges_submissionOrderByWithAggregationInput | targeted_challenges_submissionOrderByWithAggregationInput[]
    by: Targeted_challenges_submissionScalarFieldEnum[] | Targeted_challenges_submissionScalarFieldEnum
    having?: targeted_challenges_submissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Targeted_challenges_submissionCountAggregateInputType | true
    _avg?: Targeted_challenges_submissionAvgAggregateInputType
    _sum?: Targeted_challenges_submissionSumAggregateInputType
    _min?: Targeted_challenges_submissionMinAggregateInputType
    _max?: Targeted_challenges_submissionMaxAggregateInputType
  }

  export type Targeted_challenges_submissionGroupByOutputType = {
    submission_id: number
    challenge_id: number
    c_target: $Enums.c_target_type
    submitter_id: string
    media_url: string | null
    caption: string | null
    time_submitted: Date
    _count: Targeted_challenges_submissionCountAggregateOutputType | null
    _avg: Targeted_challenges_submissionAvgAggregateOutputType | null
    _sum: Targeted_challenges_submissionSumAggregateOutputType | null
    _min: Targeted_challenges_submissionMinAggregateOutputType | null
    _max: Targeted_challenges_submissionMaxAggregateOutputType | null
  }

  type GetTargeted_challenges_submissionGroupByPayload<T extends targeted_challenges_submissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Targeted_challenges_submissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Targeted_challenges_submissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Targeted_challenges_submissionGroupByOutputType[P]>
            : GetScalarType<T[P], Targeted_challenges_submissionGroupByOutputType[P]>
        }
      >
    >


  export type targeted_challenges_submissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    submission_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    submitter_id?: boolean
    media_url?: boolean
    caption?: boolean
    time_submitted?: boolean
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges_submission"]>

  export type targeted_challenges_submissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    submission_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    submitter_id?: boolean
    media_url?: boolean
    caption?: boolean
    time_submitted?: boolean
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges_submission"]>

  export type targeted_challenges_submissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    submission_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    submitter_id?: boolean
    media_url?: boolean
    caption?: boolean
    time_submitted?: boolean
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges_submission"]>

  export type targeted_challenges_submissionSelectScalar = {
    submission_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    submitter_id?: boolean
    media_url?: boolean
    caption?: boolean
    time_submitted?: boolean
  }

  export type targeted_challenges_submissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"submission_id" | "challenge_id" | "c_target" | "submitter_id" | "media_url" | "caption" | "time_submitted", ExtArgs["result"]["targeted_challenges_submission"]>
  export type targeted_challenges_submissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }
  export type targeted_challenges_submissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }
  export type targeted_challenges_submissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }

  export type $targeted_challenges_submissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "targeted_challenges_submission"
    objects: {
      targeted_challenges: Prisma.$targeted_challengesPayload<ExtArgs>
      profile: Prisma.$profilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      submission_id: number
      challenge_id: number
      c_target: $Enums.c_target_type
      submitter_id: string
      media_url: string | null
      caption: string | null
      time_submitted: Date
    }, ExtArgs["result"]["targeted_challenges_submission"]>
    composites: {}
  }

  type targeted_challenges_submissionGetPayload<S extends boolean | null | undefined | targeted_challenges_submissionDefaultArgs> = $Result.GetResult<Prisma.$targeted_challenges_submissionPayload, S>

  type targeted_challenges_submissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<targeted_challenges_submissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Targeted_challenges_submissionCountAggregateInputType | true
    }

  export interface targeted_challenges_submissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['targeted_challenges_submission'], meta: { name: 'targeted_challenges_submission' } }
    /**
     * Find zero or one Targeted_challenges_submission that matches the filter.
     * @param {targeted_challenges_submissionFindUniqueArgs} args - Arguments to find a Targeted_challenges_submission
     * @example
     * // Get one Targeted_challenges_submission
     * const targeted_challenges_submission = await prisma.targeted_challenges_submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends targeted_challenges_submissionFindUniqueArgs>(args: SelectSubset<T, targeted_challenges_submissionFindUniqueArgs<ExtArgs>>): Prisma__targeted_challenges_submissionClient<$Result.GetResult<Prisma.$targeted_challenges_submissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Targeted_challenges_submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {targeted_challenges_submissionFindUniqueOrThrowArgs} args - Arguments to find a Targeted_challenges_submission
     * @example
     * // Get one Targeted_challenges_submission
     * const targeted_challenges_submission = await prisma.targeted_challenges_submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends targeted_challenges_submissionFindUniqueOrThrowArgs>(args: SelectSubset<T, targeted_challenges_submissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__targeted_challenges_submissionClient<$Result.GetResult<Prisma.$targeted_challenges_submissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Targeted_challenges_submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_submissionFindFirstArgs} args - Arguments to find a Targeted_challenges_submission
     * @example
     * // Get one Targeted_challenges_submission
     * const targeted_challenges_submission = await prisma.targeted_challenges_submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends targeted_challenges_submissionFindFirstArgs>(args?: SelectSubset<T, targeted_challenges_submissionFindFirstArgs<ExtArgs>>): Prisma__targeted_challenges_submissionClient<$Result.GetResult<Prisma.$targeted_challenges_submissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Targeted_challenges_submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_submissionFindFirstOrThrowArgs} args - Arguments to find a Targeted_challenges_submission
     * @example
     * // Get one Targeted_challenges_submission
     * const targeted_challenges_submission = await prisma.targeted_challenges_submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends targeted_challenges_submissionFindFirstOrThrowArgs>(args?: SelectSubset<T, targeted_challenges_submissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__targeted_challenges_submissionClient<$Result.GetResult<Prisma.$targeted_challenges_submissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Targeted_challenges_submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_submissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Targeted_challenges_submissions
     * const targeted_challenges_submissions = await prisma.targeted_challenges_submission.findMany()
     * 
     * // Get first 10 Targeted_challenges_submissions
     * const targeted_challenges_submissions = await prisma.targeted_challenges_submission.findMany({ take: 10 })
     * 
     * // Only select the `submission_id`
     * const targeted_challenges_submissionWithSubmission_idOnly = await prisma.targeted_challenges_submission.findMany({ select: { submission_id: true } })
     * 
     */
    findMany<T extends targeted_challenges_submissionFindManyArgs>(args?: SelectSubset<T, targeted_challenges_submissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_submissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Targeted_challenges_submission.
     * @param {targeted_challenges_submissionCreateArgs} args - Arguments to create a Targeted_challenges_submission.
     * @example
     * // Create one Targeted_challenges_submission
     * const Targeted_challenges_submission = await prisma.targeted_challenges_submission.create({
     *   data: {
     *     // ... data to create a Targeted_challenges_submission
     *   }
     * })
     * 
     */
    create<T extends targeted_challenges_submissionCreateArgs>(args: SelectSubset<T, targeted_challenges_submissionCreateArgs<ExtArgs>>): Prisma__targeted_challenges_submissionClient<$Result.GetResult<Prisma.$targeted_challenges_submissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Targeted_challenges_submissions.
     * @param {targeted_challenges_submissionCreateManyArgs} args - Arguments to create many Targeted_challenges_submissions.
     * @example
     * // Create many Targeted_challenges_submissions
     * const targeted_challenges_submission = await prisma.targeted_challenges_submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends targeted_challenges_submissionCreateManyArgs>(args?: SelectSubset<T, targeted_challenges_submissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Targeted_challenges_submissions and returns the data saved in the database.
     * @param {targeted_challenges_submissionCreateManyAndReturnArgs} args - Arguments to create many Targeted_challenges_submissions.
     * @example
     * // Create many Targeted_challenges_submissions
     * const targeted_challenges_submission = await prisma.targeted_challenges_submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Targeted_challenges_submissions and only return the `submission_id`
     * const targeted_challenges_submissionWithSubmission_idOnly = await prisma.targeted_challenges_submission.createManyAndReturn({
     *   select: { submission_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends targeted_challenges_submissionCreateManyAndReturnArgs>(args?: SelectSubset<T, targeted_challenges_submissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_submissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Targeted_challenges_submission.
     * @param {targeted_challenges_submissionDeleteArgs} args - Arguments to delete one Targeted_challenges_submission.
     * @example
     * // Delete one Targeted_challenges_submission
     * const Targeted_challenges_submission = await prisma.targeted_challenges_submission.delete({
     *   where: {
     *     // ... filter to delete one Targeted_challenges_submission
     *   }
     * })
     * 
     */
    delete<T extends targeted_challenges_submissionDeleteArgs>(args: SelectSubset<T, targeted_challenges_submissionDeleteArgs<ExtArgs>>): Prisma__targeted_challenges_submissionClient<$Result.GetResult<Prisma.$targeted_challenges_submissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Targeted_challenges_submission.
     * @param {targeted_challenges_submissionUpdateArgs} args - Arguments to update one Targeted_challenges_submission.
     * @example
     * // Update one Targeted_challenges_submission
     * const targeted_challenges_submission = await prisma.targeted_challenges_submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends targeted_challenges_submissionUpdateArgs>(args: SelectSubset<T, targeted_challenges_submissionUpdateArgs<ExtArgs>>): Prisma__targeted_challenges_submissionClient<$Result.GetResult<Prisma.$targeted_challenges_submissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Targeted_challenges_submissions.
     * @param {targeted_challenges_submissionDeleteManyArgs} args - Arguments to filter Targeted_challenges_submissions to delete.
     * @example
     * // Delete a few Targeted_challenges_submissions
     * const { count } = await prisma.targeted_challenges_submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends targeted_challenges_submissionDeleteManyArgs>(args?: SelectSubset<T, targeted_challenges_submissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Targeted_challenges_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_submissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Targeted_challenges_submissions
     * const targeted_challenges_submission = await prisma.targeted_challenges_submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends targeted_challenges_submissionUpdateManyArgs>(args: SelectSubset<T, targeted_challenges_submissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Targeted_challenges_submissions and returns the data updated in the database.
     * @param {targeted_challenges_submissionUpdateManyAndReturnArgs} args - Arguments to update many Targeted_challenges_submissions.
     * @example
     * // Update many Targeted_challenges_submissions
     * const targeted_challenges_submission = await prisma.targeted_challenges_submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Targeted_challenges_submissions and only return the `submission_id`
     * const targeted_challenges_submissionWithSubmission_idOnly = await prisma.targeted_challenges_submission.updateManyAndReturn({
     *   select: { submission_id: true },
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
    updateManyAndReturn<T extends targeted_challenges_submissionUpdateManyAndReturnArgs>(args: SelectSubset<T, targeted_challenges_submissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_submissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Targeted_challenges_submission.
     * @param {targeted_challenges_submissionUpsertArgs} args - Arguments to update or create a Targeted_challenges_submission.
     * @example
     * // Update or create a Targeted_challenges_submission
     * const targeted_challenges_submission = await prisma.targeted_challenges_submission.upsert({
     *   create: {
     *     // ... data to create a Targeted_challenges_submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Targeted_challenges_submission we want to update
     *   }
     * })
     */
    upsert<T extends targeted_challenges_submissionUpsertArgs>(args: SelectSubset<T, targeted_challenges_submissionUpsertArgs<ExtArgs>>): Prisma__targeted_challenges_submissionClient<$Result.GetResult<Prisma.$targeted_challenges_submissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Targeted_challenges_submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_submissionCountArgs} args - Arguments to filter Targeted_challenges_submissions to count.
     * @example
     * // Count the number of Targeted_challenges_submissions
     * const count = await prisma.targeted_challenges_submission.count({
     *   where: {
     *     // ... the filter for the Targeted_challenges_submissions we want to count
     *   }
     * })
    **/
    count<T extends targeted_challenges_submissionCountArgs>(
      args?: Subset<T, targeted_challenges_submissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Targeted_challenges_submissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Targeted_challenges_submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Targeted_challenges_submissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Targeted_challenges_submissionAggregateArgs>(args: Subset<T, Targeted_challenges_submissionAggregateArgs>): Prisma.PrismaPromise<GetTargeted_challenges_submissionAggregateType<T>>

    /**
     * Group by Targeted_challenges_submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_submissionGroupByArgs} args - Group by arguments.
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
      T extends targeted_challenges_submissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: targeted_challenges_submissionGroupByArgs['orderBy'] }
        : { orderBy?: targeted_challenges_submissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, targeted_challenges_submissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTargeted_challenges_submissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the targeted_challenges_submission model
   */
  readonly fields: targeted_challenges_submissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for targeted_challenges_submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__targeted_challenges_submissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    targeted_challenges<T extends targeted_challengesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, targeted_challengesDefaultArgs<ExtArgs>>): Prisma__targeted_challengesClient<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the targeted_challenges_submission model
   */
  interface targeted_challenges_submissionFieldRefs {
    readonly submission_id: FieldRef<"targeted_challenges_submission", 'Int'>
    readonly challenge_id: FieldRef<"targeted_challenges_submission", 'Int'>
    readonly c_target: FieldRef<"targeted_challenges_submission", 'c_target_type'>
    readonly submitter_id: FieldRef<"targeted_challenges_submission", 'String'>
    readonly media_url: FieldRef<"targeted_challenges_submission", 'String'>
    readonly caption: FieldRef<"targeted_challenges_submission", 'String'>
    readonly time_submitted: FieldRef<"targeted_challenges_submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * targeted_challenges_submission findUnique
   */
  export type targeted_challenges_submissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_submission to fetch.
     */
    where: targeted_challenges_submissionWhereUniqueInput
  }

  /**
   * targeted_challenges_submission findUniqueOrThrow
   */
  export type targeted_challenges_submissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_submission to fetch.
     */
    where: targeted_challenges_submissionWhereUniqueInput
  }

  /**
   * targeted_challenges_submission findFirst
   */
  export type targeted_challenges_submissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_submission to fetch.
     */
    where?: targeted_challenges_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges_submissions to fetch.
     */
    orderBy?: targeted_challenges_submissionOrderByWithRelationInput | targeted_challenges_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for targeted_challenges_submissions.
     */
    cursor?: targeted_challenges_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of targeted_challenges_submissions.
     */
    distinct?: Targeted_challenges_submissionScalarFieldEnum | Targeted_challenges_submissionScalarFieldEnum[]
  }

  /**
   * targeted_challenges_submission findFirstOrThrow
   */
  export type targeted_challenges_submissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_submission to fetch.
     */
    where?: targeted_challenges_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges_submissions to fetch.
     */
    orderBy?: targeted_challenges_submissionOrderByWithRelationInput | targeted_challenges_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for targeted_challenges_submissions.
     */
    cursor?: targeted_challenges_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges_submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of targeted_challenges_submissions.
     */
    distinct?: Targeted_challenges_submissionScalarFieldEnum | Targeted_challenges_submissionScalarFieldEnum[]
  }

  /**
   * targeted_challenges_submission findMany
   */
  export type targeted_challenges_submissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_submissions to fetch.
     */
    where?: targeted_challenges_submissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges_submissions to fetch.
     */
    orderBy?: targeted_challenges_submissionOrderByWithRelationInput | targeted_challenges_submissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing targeted_challenges_submissions.
     */
    cursor?: targeted_challenges_submissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges_submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges_submissions.
     */
    skip?: number
    distinct?: Targeted_challenges_submissionScalarFieldEnum | Targeted_challenges_submissionScalarFieldEnum[]
  }

  /**
   * targeted_challenges_submission create
   */
  export type targeted_challenges_submissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionInclude<ExtArgs> | null
    /**
     * The data needed to create a targeted_challenges_submission.
     */
    data: XOR<targeted_challenges_submissionCreateInput, targeted_challenges_submissionUncheckedCreateInput>
  }

  /**
   * targeted_challenges_submission createMany
   */
  export type targeted_challenges_submissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many targeted_challenges_submissions.
     */
    data: targeted_challenges_submissionCreateManyInput | targeted_challenges_submissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * targeted_challenges_submission createManyAndReturn
   */
  export type targeted_challenges_submissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * The data used to create many targeted_challenges_submissions.
     */
    data: targeted_challenges_submissionCreateManyInput | targeted_challenges_submissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * targeted_challenges_submission update
   */
  export type targeted_challenges_submissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionInclude<ExtArgs> | null
    /**
     * The data needed to update a targeted_challenges_submission.
     */
    data: XOR<targeted_challenges_submissionUpdateInput, targeted_challenges_submissionUncheckedUpdateInput>
    /**
     * Choose, which targeted_challenges_submission to update.
     */
    where: targeted_challenges_submissionWhereUniqueInput
  }

  /**
   * targeted_challenges_submission updateMany
   */
  export type targeted_challenges_submissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update targeted_challenges_submissions.
     */
    data: XOR<targeted_challenges_submissionUpdateManyMutationInput, targeted_challenges_submissionUncheckedUpdateManyInput>
    /**
     * Filter which targeted_challenges_submissions to update
     */
    where?: targeted_challenges_submissionWhereInput
    /**
     * Limit how many targeted_challenges_submissions to update.
     */
    limit?: number
  }

  /**
   * targeted_challenges_submission updateManyAndReturn
   */
  export type targeted_challenges_submissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * The data used to update targeted_challenges_submissions.
     */
    data: XOR<targeted_challenges_submissionUpdateManyMutationInput, targeted_challenges_submissionUncheckedUpdateManyInput>
    /**
     * Filter which targeted_challenges_submissions to update
     */
    where?: targeted_challenges_submissionWhereInput
    /**
     * Limit how many targeted_challenges_submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * targeted_challenges_submission upsert
   */
  export type targeted_challenges_submissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionInclude<ExtArgs> | null
    /**
     * The filter to search for the targeted_challenges_submission to update in case it exists.
     */
    where: targeted_challenges_submissionWhereUniqueInput
    /**
     * In case the targeted_challenges_submission found by the `where` argument doesn't exist, create a new targeted_challenges_submission with this data.
     */
    create: XOR<targeted_challenges_submissionCreateInput, targeted_challenges_submissionUncheckedCreateInput>
    /**
     * In case the targeted_challenges_submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<targeted_challenges_submissionUpdateInput, targeted_challenges_submissionUncheckedUpdateInput>
  }

  /**
   * targeted_challenges_submission delete
   */
  export type targeted_challenges_submissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionInclude<ExtArgs> | null
    /**
     * Filter which targeted_challenges_submission to delete.
     */
    where: targeted_challenges_submissionWhereUniqueInput
  }

  /**
   * targeted_challenges_submission deleteMany
   */
  export type targeted_challenges_submissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which targeted_challenges_submissions to delete
     */
    where?: targeted_challenges_submissionWhereInput
    /**
     * Limit how many targeted_challenges_submissions to delete.
     */
    limit?: number
  }

  /**
   * targeted_challenges_submission without action
   */
  export type targeted_challenges_submissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_submission
     */
    select?: targeted_challenges_submissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_submission
     */
    omit?: targeted_challenges_submissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_submissionInclude<ExtArgs> | null
  }


  /**
   * Model targeted_challenges_votes
   */

  export type AggregateTargeted_challenges_votes = {
    _count: Targeted_challenges_votesCountAggregateOutputType | null
    _avg: Targeted_challenges_votesAvgAggregateOutputType | null
    _sum: Targeted_challenges_votesSumAggregateOutputType | null
    _min: Targeted_challenges_votesMinAggregateOutputType | null
    _max: Targeted_challenges_votesMaxAggregateOutputType | null
  }

  export type Targeted_challenges_votesAvgAggregateOutputType = {
    vote_id: number | null
    challenge_id: number | null
  }

  export type Targeted_challenges_votesSumAggregateOutputType = {
    vote_id: number | null
    challenge_id: number | null
  }

  export type Targeted_challenges_votesMinAggregateOutputType = {
    vote_id: number | null
    challenge_id: number | null
    c_target: $Enums.c_target_type | null
    vote_direction: $Enums.cast_direction | null
    voter_id: string | null
  }

  export type Targeted_challenges_votesMaxAggregateOutputType = {
    vote_id: number | null
    challenge_id: number | null
    c_target: $Enums.c_target_type | null
    vote_direction: $Enums.cast_direction | null
    voter_id: string | null
  }

  export type Targeted_challenges_votesCountAggregateOutputType = {
    vote_id: number
    challenge_id: number
    c_target: number
    vote_direction: number
    voter_id: number
    _all: number
  }


  export type Targeted_challenges_votesAvgAggregateInputType = {
    vote_id?: true
    challenge_id?: true
  }

  export type Targeted_challenges_votesSumAggregateInputType = {
    vote_id?: true
    challenge_id?: true
  }

  export type Targeted_challenges_votesMinAggregateInputType = {
    vote_id?: true
    challenge_id?: true
    c_target?: true
    vote_direction?: true
    voter_id?: true
  }

  export type Targeted_challenges_votesMaxAggregateInputType = {
    vote_id?: true
    challenge_id?: true
    c_target?: true
    vote_direction?: true
    voter_id?: true
  }

  export type Targeted_challenges_votesCountAggregateInputType = {
    vote_id?: true
    challenge_id?: true
    c_target?: true
    vote_direction?: true
    voter_id?: true
    _all?: true
  }

  export type Targeted_challenges_votesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which targeted_challenges_votes to aggregate.
     */
    where?: targeted_challenges_votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges_votes to fetch.
     */
    orderBy?: targeted_challenges_votesOrderByWithRelationInput | targeted_challenges_votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: targeted_challenges_votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges_votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges_votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned targeted_challenges_votes
    **/
    _count?: true | Targeted_challenges_votesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Targeted_challenges_votesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Targeted_challenges_votesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Targeted_challenges_votesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Targeted_challenges_votesMaxAggregateInputType
  }

  export type GetTargeted_challenges_votesAggregateType<T extends Targeted_challenges_votesAggregateArgs> = {
        [P in keyof T & keyof AggregateTargeted_challenges_votes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTargeted_challenges_votes[P]>
      : GetScalarType<T[P], AggregateTargeted_challenges_votes[P]>
  }




  export type targeted_challenges_votesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: targeted_challenges_votesWhereInput
    orderBy?: targeted_challenges_votesOrderByWithAggregationInput | targeted_challenges_votesOrderByWithAggregationInput[]
    by: Targeted_challenges_votesScalarFieldEnum[] | Targeted_challenges_votesScalarFieldEnum
    having?: targeted_challenges_votesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Targeted_challenges_votesCountAggregateInputType | true
    _avg?: Targeted_challenges_votesAvgAggregateInputType
    _sum?: Targeted_challenges_votesSumAggregateInputType
    _min?: Targeted_challenges_votesMinAggregateInputType
    _max?: Targeted_challenges_votesMaxAggregateInputType
  }

  export type Targeted_challenges_votesGroupByOutputType = {
    vote_id: number
    challenge_id: number
    c_target: $Enums.c_target_type
    vote_direction: $Enums.cast_direction
    voter_id: string
    _count: Targeted_challenges_votesCountAggregateOutputType | null
    _avg: Targeted_challenges_votesAvgAggregateOutputType | null
    _sum: Targeted_challenges_votesSumAggregateOutputType | null
    _min: Targeted_challenges_votesMinAggregateOutputType | null
    _max: Targeted_challenges_votesMaxAggregateOutputType | null
  }

  type GetTargeted_challenges_votesGroupByPayload<T extends targeted_challenges_votesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Targeted_challenges_votesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Targeted_challenges_votesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Targeted_challenges_votesGroupByOutputType[P]>
            : GetScalarType<T[P], Targeted_challenges_votesGroupByOutputType[P]>
        }
      >
    >


  export type targeted_challenges_votesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vote_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    vote_direction?: boolean
    voter_id?: boolean
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges_votes"]>

  export type targeted_challenges_votesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vote_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    vote_direction?: boolean
    voter_id?: boolean
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges_votes"]>

  export type targeted_challenges_votesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    vote_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    vote_direction?: boolean
    voter_id?: boolean
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["targeted_challenges_votes"]>

  export type targeted_challenges_votesSelectScalar = {
    vote_id?: boolean
    challenge_id?: boolean
    c_target?: boolean
    vote_direction?: boolean
    voter_id?: boolean
  }

  export type targeted_challenges_votesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"vote_id" | "challenge_id" | "c_target" | "vote_direction" | "voter_id", ExtArgs["result"]["targeted_challenges_votes"]>
  export type targeted_challenges_votesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }
  export type targeted_challenges_votesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }
  export type targeted_challenges_votesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    targeted_challenges?: boolean | targeted_challengesDefaultArgs<ExtArgs>
    profile?: boolean | profileDefaultArgs<ExtArgs>
  }

  export type $targeted_challenges_votesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "targeted_challenges_votes"
    objects: {
      targeted_challenges: Prisma.$targeted_challengesPayload<ExtArgs>
      profile: Prisma.$profilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      vote_id: number
      challenge_id: number
      c_target: $Enums.c_target_type
      vote_direction: $Enums.cast_direction
      voter_id: string
    }, ExtArgs["result"]["targeted_challenges_votes"]>
    composites: {}
  }

  type targeted_challenges_votesGetPayload<S extends boolean | null | undefined | targeted_challenges_votesDefaultArgs> = $Result.GetResult<Prisma.$targeted_challenges_votesPayload, S>

  type targeted_challenges_votesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<targeted_challenges_votesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Targeted_challenges_votesCountAggregateInputType | true
    }

  export interface targeted_challenges_votesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['targeted_challenges_votes'], meta: { name: 'targeted_challenges_votes' } }
    /**
     * Find zero or one Targeted_challenges_votes that matches the filter.
     * @param {targeted_challenges_votesFindUniqueArgs} args - Arguments to find a Targeted_challenges_votes
     * @example
     * // Get one Targeted_challenges_votes
     * const targeted_challenges_votes = await prisma.targeted_challenges_votes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends targeted_challenges_votesFindUniqueArgs>(args: SelectSubset<T, targeted_challenges_votesFindUniqueArgs<ExtArgs>>): Prisma__targeted_challenges_votesClient<$Result.GetResult<Prisma.$targeted_challenges_votesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Targeted_challenges_votes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {targeted_challenges_votesFindUniqueOrThrowArgs} args - Arguments to find a Targeted_challenges_votes
     * @example
     * // Get one Targeted_challenges_votes
     * const targeted_challenges_votes = await prisma.targeted_challenges_votes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends targeted_challenges_votesFindUniqueOrThrowArgs>(args: SelectSubset<T, targeted_challenges_votesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__targeted_challenges_votesClient<$Result.GetResult<Prisma.$targeted_challenges_votesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Targeted_challenges_votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_votesFindFirstArgs} args - Arguments to find a Targeted_challenges_votes
     * @example
     * // Get one Targeted_challenges_votes
     * const targeted_challenges_votes = await prisma.targeted_challenges_votes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends targeted_challenges_votesFindFirstArgs>(args?: SelectSubset<T, targeted_challenges_votesFindFirstArgs<ExtArgs>>): Prisma__targeted_challenges_votesClient<$Result.GetResult<Prisma.$targeted_challenges_votesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Targeted_challenges_votes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_votesFindFirstOrThrowArgs} args - Arguments to find a Targeted_challenges_votes
     * @example
     * // Get one Targeted_challenges_votes
     * const targeted_challenges_votes = await prisma.targeted_challenges_votes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends targeted_challenges_votesFindFirstOrThrowArgs>(args?: SelectSubset<T, targeted_challenges_votesFindFirstOrThrowArgs<ExtArgs>>): Prisma__targeted_challenges_votesClient<$Result.GetResult<Prisma.$targeted_challenges_votesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Targeted_challenges_votes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_votesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Targeted_challenges_votes
     * const targeted_challenges_votes = await prisma.targeted_challenges_votes.findMany()
     * 
     * // Get first 10 Targeted_challenges_votes
     * const targeted_challenges_votes = await prisma.targeted_challenges_votes.findMany({ take: 10 })
     * 
     * // Only select the `vote_id`
     * const targeted_challenges_votesWithVote_idOnly = await prisma.targeted_challenges_votes.findMany({ select: { vote_id: true } })
     * 
     */
    findMany<T extends targeted_challenges_votesFindManyArgs>(args?: SelectSubset<T, targeted_challenges_votesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_votesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Targeted_challenges_votes.
     * @param {targeted_challenges_votesCreateArgs} args - Arguments to create a Targeted_challenges_votes.
     * @example
     * // Create one Targeted_challenges_votes
     * const Targeted_challenges_votes = await prisma.targeted_challenges_votes.create({
     *   data: {
     *     // ... data to create a Targeted_challenges_votes
     *   }
     * })
     * 
     */
    create<T extends targeted_challenges_votesCreateArgs>(args: SelectSubset<T, targeted_challenges_votesCreateArgs<ExtArgs>>): Prisma__targeted_challenges_votesClient<$Result.GetResult<Prisma.$targeted_challenges_votesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Targeted_challenges_votes.
     * @param {targeted_challenges_votesCreateManyArgs} args - Arguments to create many Targeted_challenges_votes.
     * @example
     * // Create many Targeted_challenges_votes
     * const targeted_challenges_votes = await prisma.targeted_challenges_votes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends targeted_challenges_votesCreateManyArgs>(args?: SelectSubset<T, targeted_challenges_votesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Targeted_challenges_votes and returns the data saved in the database.
     * @param {targeted_challenges_votesCreateManyAndReturnArgs} args - Arguments to create many Targeted_challenges_votes.
     * @example
     * // Create many Targeted_challenges_votes
     * const targeted_challenges_votes = await prisma.targeted_challenges_votes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Targeted_challenges_votes and only return the `vote_id`
     * const targeted_challenges_votesWithVote_idOnly = await prisma.targeted_challenges_votes.createManyAndReturn({
     *   select: { vote_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends targeted_challenges_votesCreateManyAndReturnArgs>(args?: SelectSubset<T, targeted_challenges_votesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_votesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Targeted_challenges_votes.
     * @param {targeted_challenges_votesDeleteArgs} args - Arguments to delete one Targeted_challenges_votes.
     * @example
     * // Delete one Targeted_challenges_votes
     * const Targeted_challenges_votes = await prisma.targeted_challenges_votes.delete({
     *   where: {
     *     // ... filter to delete one Targeted_challenges_votes
     *   }
     * })
     * 
     */
    delete<T extends targeted_challenges_votesDeleteArgs>(args: SelectSubset<T, targeted_challenges_votesDeleteArgs<ExtArgs>>): Prisma__targeted_challenges_votesClient<$Result.GetResult<Prisma.$targeted_challenges_votesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Targeted_challenges_votes.
     * @param {targeted_challenges_votesUpdateArgs} args - Arguments to update one Targeted_challenges_votes.
     * @example
     * // Update one Targeted_challenges_votes
     * const targeted_challenges_votes = await prisma.targeted_challenges_votes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends targeted_challenges_votesUpdateArgs>(args: SelectSubset<T, targeted_challenges_votesUpdateArgs<ExtArgs>>): Prisma__targeted_challenges_votesClient<$Result.GetResult<Prisma.$targeted_challenges_votesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Targeted_challenges_votes.
     * @param {targeted_challenges_votesDeleteManyArgs} args - Arguments to filter Targeted_challenges_votes to delete.
     * @example
     * // Delete a few Targeted_challenges_votes
     * const { count } = await prisma.targeted_challenges_votes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends targeted_challenges_votesDeleteManyArgs>(args?: SelectSubset<T, targeted_challenges_votesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Targeted_challenges_votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_votesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Targeted_challenges_votes
     * const targeted_challenges_votes = await prisma.targeted_challenges_votes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends targeted_challenges_votesUpdateManyArgs>(args: SelectSubset<T, targeted_challenges_votesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Targeted_challenges_votes and returns the data updated in the database.
     * @param {targeted_challenges_votesUpdateManyAndReturnArgs} args - Arguments to update many Targeted_challenges_votes.
     * @example
     * // Update many Targeted_challenges_votes
     * const targeted_challenges_votes = await prisma.targeted_challenges_votes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Targeted_challenges_votes and only return the `vote_id`
     * const targeted_challenges_votesWithVote_idOnly = await prisma.targeted_challenges_votes.updateManyAndReturn({
     *   select: { vote_id: true },
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
    updateManyAndReturn<T extends targeted_challenges_votesUpdateManyAndReturnArgs>(args: SelectSubset<T, targeted_challenges_votesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$targeted_challenges_votesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Targeted_challenges_votes.
     * @param {targeted_challenges_votesUpsertArgs} args - Arguments to update or create a Targeted_challenges_votes.
     * @example
     * // Update or create a Targeted_challenges_votes
     * const targeted_challenges_votes = await prisma.targeted_challenges_votes.upsert({
     *   create: {
     *     // ... data to create a Targeted_challenges_votes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Targeted_challenges_votes we want to update
     *   }
     * })
     */
    upsert<T extends targeted_challenges_votesUpsertArgs>(args: SelectSubset<T, targeted_challenges_votesUpsertArgs<ExtArgs>>): Prisma__targeted_challenges_votesClient<$Result.GetResult<Prisma.$targeted_challenges_votesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Targeted_challenges_votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_votesCountArgs} args - Arguments to filter Targeted_challenges_votes to count.
     * @example
     * // Count the number of Targeted_challenges_votes
     * const count = await prisma.targeted_challenges_votes.count({
     *   where: {
     *     // ... the filter for the Targeted_challenges_votes we want to count
     *   }
     * })
    **/
    count<T extends targeted_challenges_votesCountArgs>(
      args?: Subset<T, targeted_challenges_votesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Targeted_challenges_votesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Targeted_challenges_votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Targeted_challenges_votesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Targeted_challenges_votesAggregateArgs>(args: Subset<T, Targeted_challenges_votesAggregateArgs>): Prisma.PrismaPromise<GetTargeted_challenges_votesAggregateType<T>>

    /**
     * Group by Targeted_challenges_votes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {targeted_challenges_votesGroupByArgs} args - Group by arguments.
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
      T extends targeted_challenges_votesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: targeted_challenges_votesGroupByArgs['orderBy'] }
        : { orderBy?: targeted_challenges_votesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, targeted_challenges_votesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTargeted_challenges_votesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the targeted_challenges_votes model
   */
  readonly fields: targeted_challenges_votesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for targeted_challenges_votes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__targeted_challenges_votesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    targeted_challenges<T extends targeted_challengesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, targeted_challengesDefaultArgs<ExtArgs>>): Prisma__targeted_challengesClient<$Result.GetResult<Prisma.$targeted_challengesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the targeted_challenges_votes model
   */
  interface targeted_challenges_votesFieldRefs {
    readonly vote_id: FieldRef<"targeted_challenges_votes", 'Int'>
    readonly challenge_id: FieldRef<"targeted_challenges_votes", 'Int'>
    readonly c_target: FieldRef<"targeted_challenges_votes", 'c_target_type'>
    readonly vote_direction: FieldRef<"targeted_challenges_votes", 'cast_direction'>
    readonly voter_id: FieldRef<"targeted_challenges_votes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * targeted_challenges_votes findUnique
   */
  export type targeted_challenges_votesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_votes to fetch.
     */
    where: targeted_challenges_votesWhereUniqueInput
  }

  /**
   * targeted_challenges_votes findUniqueOrThrow
   */
  export type targeted_challenges_votesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_votes to fetch.
     */
    where: targeted_challenges_votesWhereUniqueInput
  }

  /**
   * targeted_challenges_votes findFirst
   */
  export type targeted_challenges_votesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_votes to fetch.
     */
    where?: targeted_challenges_votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges_votes to fetch.
     */
    orderBy?: targeted_challenges_votesOrderByWithRelationInput | targeted_challenges_votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for targeted_challenges_votes.
     */
    cursor?: targeted_challenges_votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges_votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges_votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of targeted_challenges_votes.
     */
    distinct?: Targeted_challenges_votesScalarFieldEnum | Targeted_challenges_votesScalarFieldEnum[]
  }

  /**
   * targeted_challenges_votes findFirstOrThrow
   */
  export type targeted_challenges_votesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_votes to fetch.
     */
    where?: targeted_challenges_votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges_votes to fetch.
     */
    orderBy?: targeted_challenges_votesOrderByWithRelationInput | targeted_challenges_votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for targeted_challenges_votes.
     */
    cursor?: targeted_challenges_votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges_votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges_votes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of targeted_challenges_votes.
     */
    distinct?: Targeted_challenges_votesScalarFieldEnum | Targeted_challenges_votesScalarFieldEnum[]
  }

  /**
   * targeted_challenges_votes findMany
   */
  export type targeted_challenges_votesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesInclude<ExtArgs> | null
    /**
     * Filter, which targeted_challenges_votes to fetch.
     */
    where?: targeted_challenges_votesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of targeted_challenges_votes to fetch.
     */
    orderBy?: targeted_challenges_votesOrderByWithRelationInput | targeted_challenges_votesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing targeted_challenges_votes.
     */
    cursor?: targeted_challenges_votesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` targeted_challenges_votes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` targeted_challenges_votes.
     */
    skip?: number
    distinct?: Targeted_challenges_votesScalarFieldEnum | Targeted_challenges_votesScalarFieldEnum[]
  }

  /**
   * targeted_challenges_votes create
   */
  export type targeted_challenges_votesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesInclude<ExtArgs> | null
    /**
     * The data needed to create a targeted_challenges_votes.
     */
    data: XOR<targeted_challenges_votesCreateInput, targeted_challenges_votesUncheckedCreateInput>
  }

  /**
   * targeted_challenges_votes createMany
   */
  export type targeted_challenges_votesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many targeted_challenges_votes.
     */
    data: targeted_challenges_votesCreateManyInput | targeted_challenges_votesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * targeted_challenges_votes createManyAndReturn
   */
  export type targeted_challenges_votesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * The data used to create many targeted_challenges_votes.
     */
    data: targeted_challenges_votesCreateManyInput | targeted_challenges_votesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * targeted_challenges_votes update
   */
  export type targeted_challenges_votesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesInclude<ExtArgs> | null
    /**
     * The data needed to update a targeted_challenges_votes.
     */
    data: XOR<targeted_challenges_votesUpdateInput, targeted_challenges_votesUncheckedUpdateInput>
    /**
     * Choose, which targeted_challenges_votes to update.
     */
    where: targeted_challenges_votesWhereUniqueInput
  }

  /**
   * targeted_challenges_votes updateMany
   */
  export type targeted_challenges_votesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update targeted_challenges_votes.
     */
    data: XOR<targeted_challenges_votesUpdateManyMutationInput, targeted_challenges_votesUncheckedUpdateManyInput>
    /**
     * Filter which targeted_challenges_votes to update
     */
    where?: targeted_challenges_votesWhereInput
    /**
     * Limit how many targeted_challenges_votes to update.
     */
    limit?: number
  }

  /**
   * targeted_challenges_votes updateManyAndReturn
   */
  export type targeted_challenges_votesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * The data used to update targeted_challenges_votes.
     */
    data: XOR<targeted_challenges_votesUpdateManyMutationInput, targeted_challenges_votesUncheckedUpdateManyInput>
    /**
     * Filter which targeted_challenges_votes to update
     */
    where?: targeted_challenges_votesWhereInput
    /**
     * Limit how many targeted_challenges_votes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * targeted_challenges_votes upsert
   */
  export type targeted_challenges_votesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesInclude<ExtArgs> | null
    /**
     * The filter to search for the targeted_challenges_votes to update in case it exists.
     */
    where: targeted_challenges_votesWhereUniqueInput
    /**
     * In case the targeted_challenges_votes found by the `where` argument doesn't exist, create a new targeted_challenges_votes with this data.
     */
    create: XOR<targeted_challenges_votesCreateInput, targeted_challenges_votesUncheckedCreateInput>
    /**
     * In case the targeted_challenges_votes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<targeted_challenges_votesUpdateInput, targeted_challenges_votesUncheckedUpdateInput>
  }

  /**
   * targeted_challenges_votes delete
   */
  export type targeted_challenges_votesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesInclude<ExtArgs> | null
    /**
     * Filter which targeted_challenges_votes to delete.
     */
    where: targeted_challenges_votesWhereUniqueInput
  }

  /**
   * targeted_challenges_votes deleteMany
   */
  export type targeted_challenges_votesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which targeted_challenges_votes to delete
     */
    where?: targeted_challenges_votesWhereInput
    /**
     * Limit how many targeted_challenges_votes to delete.
     */
    limit?: number
  }

  /**
   * targeted_challenges_votes without action
   */
  export type targeted_challenges_votesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the targeted_challenges_votes
     */
    select?: targeted_challenges_votesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the targeted_challenges_votes
     */
    omit?: targeted_challenges_votesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: targeted_challenges_votesInclude<ExtArgs> | null
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
    c_target: 'c_target',
    submissions: 'submissions'
  };

  export type Open_challengesScalarFieldEnum = (typeof Open_challengesScalarFieldEnum)[keyof typeof Open_challengesScalarFieldEnum]


  export const Targeted_challengesScalarFieldEnum: {
    challenge_id: 'challenge_id',
    c_target: 'c_target',
    specific_target: 'specific_target',
    votes_for: 'votes_for',
    votes_against: 'votes_against',
    bettors_for: 'bettors_for',
    bettors_against: 'bettors_against',
    bet_spread_total: 'bet_spread_total',
    bet_spread_for: 'bet_spread_for',
    bet_spread_against: 'bet_spread_against'
  };

  export type Targeted_challengesScalarFieldEnum = (typeof Targeted_challengesScalarFieldEnum)[keyof typeof Targeted_challengesScalarFieldEnum]


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


  export const Open_challenge_submissionsScalarFieldEnum: {
    open_submission_id: 'open_submission_id',
    challenge_id: 'challenge_id',
    c_target: 'c_target',
    user_id: 'user_id',
    media_url: 'media_url',
    caption: 'caption',
    time_submitted: 'time_submitted'
  };

  export type Open_challenge_submissionsScalarFieldEnum = (typeof Open_challenge_submissionsScalarFieldEnum)[keyof typeof Open_challenge_submissionsScalarFieldEnum]


  export const Targeted_challenges_betsScalarFieldEnum: {
    bet_id: 'bet_id',
    challenge_id: 'challenge_id',
    c_target: 'c_target',
    bet_direction: 'bet_direction',
    bet_magnitude: 'bet_magnitude',
    bettor_id: 'bettor_id'
  };

  export type Targeted_challenges_betsScalarFieldEnum = (typeof Targeted_challenges_betsScalarFieldEnum)[keyof typeof Targeted_challenges_betsScalarFieldEnum]


  export const Targeted_challenges_submissionScalarFieldEnum: {
    submission_id: 'submission_id',
    challenge_id: 'challenge_id',
    c_target: 'c_target',
    submitter_id: 'submitter_id',
    media_url: 'media_url',
    caption: 'caption',
    time_submitted: 'time_submitted'
  };

  export type Targeted_challenges_submissionScalarFieldEnum = (typeof Targeted_challenges_submissionScalarFieldEnum)[keyof typeof Targeted_challenges_submissionScalarFieldEnum]


  export const Targeted_challenges_votesScalarFieldEnum: {
    vote_id: 'vote_id',
    challenge_id: 'challenge_id',
    c_target: 'c_target',
    vote_direction: 'vote_direction',
    voter_id: 'voter_id'
  };

  export type Targeted_challenges_votesScalarFieldEnum = (typeof Targeted_challenges_votesScalarFieldEnum)[keyof typeof Targeted_challenges_votesScalarFieldEnum]


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
   * Reference to a field of type 'cast_direction'
   */
  export type Enumcast_directionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cast_direction'>
    


  /**
   * Reference to a field of type 'cast_direction[]'
   */
  export type ListEnumcast_directionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'cast_direction[]'>
    


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
    profile?: profileOrderByWithRelationInput
    open_challenges?: open_challengesOrderByWithRelationInput
    targeted_challenges?: targeted_challengesOrderByWithRelationInput
  }

  export type challengesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_c_target?: challengesIdC_targetCompoundUniqueInput
    AND?: challengesWhereInput | challengesWhereInput[]
    OR?: challengesWhereInput[]
    NOT?: challengesWhereInput | challengesWhereInput[]
    c_target?: Enumc_target_typeFilter<"challenges"> | $Enums.c_target_type
    c_description?: StringFilter<"challenges"> | string
    title?: StringFilter<"challenges"> | string
    time_created?: DateTimeFilter<"challenges"> | Date | string
    creator_id?: StringNullableFilter<"challenges"> | string | null
    profile?: XOR<ProfileNullableScalarRelationFilter, profileWhereInput> | null
    open_challenges?: XOR<Open_challengesNullableScalarRelationFilter, open_challengesWhereInput> | null
    targeted_challenges?: XOR<Targeted_challengesNullableScalarRelationFilter, targeted_challengesWhereInput> | null
  }, "id" | "id_c_target">

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
    c_target?: Enumc_target_typeFilter<"open_challenges"> | $Enums.c_target_type
    submissions?: IntFilter<"open_challenges"> | number
    open_challenge_submissions?: Open_challenge_submissionsListRelationFilter
    challenges?: XOR<ChallengesScalarRelationFilter, challengesWhereInput>
  }

  export type open_challengesOrderByWithRelationInput = {
    challenge_id?: SortOrder
    c_target?: SortOrder
    submissions?: SortOrder
    open_challenge_submissions?: open_challenge_submissionsOrderByRelationAggregateInput
    challenges?: challengesOrderByWithRelationInput
  }

  export type open_challengesWhereUniqueInput = Prisma.AtLeast<{
    challenge_id?: number
    challenge_id_c_target?: open_challengesChallenge_idC_targetCompoundUniqueInput
    AND?: open_challengesWhereInput | open_challengesWhereInput[]
    OR?: open_challengesWhereInput[]
    NOT?: open_challengesWhereInput | open_challengesWhereInput[]
    c_target?: Enumc_target_typeFilter<"open_challenges"> | $Enums.c_target_type
    submissions?: IntFilter<"open_challenges"> | number
    open_challenge_submissions?: Open_challenge_submissionsListRelationFilter
    challenges?: XOR<ChallengesScalarRelationFilter, challengesWhereInput>
  }, "challenge_id" | "challenge_id_c_target">

  export type open_challengesOrderByWithAggregationInput = {
    challenge_id?: SortOrder
    c_target?: SortOrder
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
    c_target?: Enumc_target_typeWithAggregatesFilter<"open_challenges"> | $Enums.c_target_type
    submissions?: IntWithAggregatesFilter<"open_challenges"> | number
  }

  export type targeted_challengesWhereInput = {
    AND?: targeted_challengesWhereInput | targeted_challengesWhereInput[]
    OR?: targeted_challengesWhereInput[]
    NOT?: targeted_challengesWhereInput | targeted_challengesWhereInput[]
    challenge_id?: IntFilter<"targeted_challenges"> | number
    c_target?: Enumc_target_typeFilter<"targeted_challenges"> | $Enums.c_target_type
    specific_target?: StringFilter<"targeted_challenges"> | string
    votes_for?: IntFilter<"targeted_challenges"> | number
    votes_against?: IntFilter<"targeted_challenges"> | number
    bettors_for?: IntFilter<"targeted_challenges"> | number
    bettors_against?: IntFilter<"targeted_challenges"> | number
    bet_spread_total?: IntFilter<"targeted_challenges"> | number
    bet_spread_for?: IntFilter<"targeted_challenges"> | number
    bet_spread_against?: IntFilter<"targeted_challenges"> | number
    challenges?: XOR<ChallengesScalarRelationFilter, challengesWhereInput>
    targeted_challenges_bets?: Targeted_challenges_betsListRelationFilter
    targeted_challenges_submission?: Targeted_challenges_submissionListRelationFilter
    targeted_challenges_votes?: Targeted_challenges_votesListRelationFilter
  }

  export type targeted_challengesOrderByWithRelationInput = {
    challenge_id?: SortOrder
    c_target?: SortOrder
    specific_target?: SortOrder
    votes_for?: SortOrder
    votes_against?: SortOrder
    bettors_for?: SortOrder
    bettors_against?: SortOrder
    bet_spread_total?: SortOrder
    bet_spread_for?: SortOrder
    bet_spread_against?: SortOrder
    challenges?: challengesOrderByWithRelationInput
    targeted_challenges_bets?: targeted_challenges_betsOrderByRelationAggregateInput
    targeted_challenges_submission?: targeted_challenges_submissionOrderByRelationAggregateInput
    targeted_challenges_votes?: targeted_challenges_votesOrderByRelationAggregateInput
  }

  export type targeted_challengesWhereUniqueInput = Prisma.AtLeast<{
    challenge_id?: number
    challenge_id_c_target?: targeted_challengesChallenge_idC_targetCompoundUniqueInput
    AND?: targeted_challengesWhereInput | targeted_challengesWhereInput[]
    OR?: targeted_challengesWhereInput[]
    NOT?: targeted_challengesWhereInput | targeted_challengesWhereInput[]
    c_target?: Enumc_target_typeFilter<"targeted_challenges"> | $Enums.c_target_type
    specific_target?: StringFilter<"targeted_challenges"> | string
    votes_for?: IntFilter<"targeted_challenges"> | number
    votes_against?: IntFilter<"targeted_challenges"> | number
    bettors_for?: IntFilter<"targeted_challenges"> | number
    bettors_against?: IntFilter<"targeted_challenges"> | number
    bet_spread_total?: IntFilter<"targeted_challenges"> | number
    bet_spread_for?: IntFilter<"targeted_challenges"> | number
    bet_spread_against?: IntFilter<"targeted_challenges"> | number
    challenges?: XOR<ChallengesScalarRelationFilter, challengesWhereInput>
    targeted_challenges_bets?: Targeted_challenges_betsListRelationFilter
    targeted_challenges_submission?: Targeted_challenges_submissionListRelationFilter
    targeted_challenges_votes?: Targeted_challenges_votesListRelationFilter
  }, "challenge_id" | "challenge_id_c_target">

  export type targeted_challengesOrderByWithAggregationInput = {
    challenge_id?: SortOrder
    c_target?: SortOrder
    specific_target?: SortOrder
    votes_for?: SortOrder
    votes_against?: SortOrder
    bettors_for?: SortOrder
    bettors_against?: SortOrder
    bet_spread_total?: SortOrder
    bet_spread_for?: SortOrder
    bet_spread_against?: SortOrder
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
    c_target?: Enumc_target_typeWithAggregatesFilter<"targeted_challenges"> | $Enums.c_target_type
    specific_target?: StringWithAggregatesFilter<"targeted_challenges"> | string
    votes_for?: IntWithAggregatesFilter<"targeted_challenges"> | number
    votes_against?: IntWithAggregatesFilter<"targeted_challenges"> | number
    bettors_for?: IntWithAggregatesFilter<"targeted_challenges"> | number
    bettors_against?: IntWithAggregatesFilter<"targeted_challenges"> | number
    bet_spread_total?: IntWithAggregatesFilter<"targeted_challenges"> | number
    bet_spread_for?: IntWithAggregatesFilter<"targeted_challenges"> | number
    bet_spread_against?: IntWithAggregatesFilter<"targeted_challenges"> | number
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
    challenges?: ChallengesListRelationFilter
    open_challenge_submissions?: Open_challenge_submissionsListRelationFilter
    targeted_challenges_bets?: Targeted_challenges_betsListRelationFilter
    targeted_challenges_submission?: Targeted_challenges_submissionListRelationFilter
    targeted_challenges_votes?: Targeted_challenges_votesListRelationFilter
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
    challenges?: challengesOrderByRelationAggregateInput
    open_challenge_submissions?: open_challenge_submissionsOrderByRelationAggregateInput
    targeted_challenges_bets?: targeted_challenges_betsOrderByRelationAggregateInput
    targeted_challenges_submission?: targeted_challenges_submissionOrderByRelationAggregateInput
    targeted_challenges_votes?: targeted_challenges_votesOrderByRelationAggregateInput
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
    challenges?: ChallengesListRelationFilter
    open_challenge_submissions?: Open_challenge_submissionsListRelationFilter
    targeted_challenges_bets?: Targeted_challenges_betsListRelationFilter
    targeted_challenges_submission?: Targeted_challenges_submissionListRelationFilter
    targeted_challenges_votes?: Targeted_challenges_votesListRelationFilter
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

  export type open_challenge_submissionsWhereInput = {
    AND?: open_challenge_submissionsWhereInput | open_challenge_submissionsWhereInput[]
    OR?: open_challenge_submissionsWhereInput[]
    NOT?: open_challenge_submissionsWhereInput | open_challenge_submissionsWhereInput[]
    open_submission_id?: IntFilter<"open_challenge_submissions"> | number
    challenge_id?: IntFilter<"open_challenge_submissions"> | number
    c_target?: Enumc_target_typeFilter<"open_challenge_submissions"> | $Enums.c_target_type
    user_id?: StringFilter<"open_challenge_submissions"> | string
    media_url?: StringNullableFilter<"open_challenge_submissions"> | string | null
    caption?: StringNullableFilter<"open_challenge_submissions"> | string | null
    time_submitted?: DateTimeFilter<"open_challenge_submissions"> | Date | string
    open_challenges?: XOR<Open_challengesScalarRelationFilter, open_challengesWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, profileWhereInput>
  }

  export type open_challenge_submissionsOrderByWithRelationInput = {
    open_submission_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    user_id?: SortOrder
    media_url?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    time_submitted?: SortOrder
    open_challenges?: open_challengesOrderByWithRelationInput
    profile?: profileOrderByWithRelationInput
  }

  export type open_challenge_submissionsWhereUniqueInput = Prisma.AtLeast<{
    open_submission_id?: number
    user_id_challenge_id?: open_challenge_submissionsUser_idChallenge_idCompoundUniqueInput
    AND?: open_challenge_submissionsWhereInput | open_challenge_submissionsWhereInput[]
    OR?: open_challenge_submissionsWhereInput[]
    NOT?: open_challenge_submissionsWhereInput | open_challenge_submissionsWhereInput[]
    challenge_id?: IntFilter<"open_challenge_submissions"> | number
    c_target?: Enumc_target_typeFilter<"open_challenge_submissions"> | $Enums.c_target_type
    user_id?: StringFilter<"open_challenge_submissions"> | string
    media_url?: StringNullableFilter<"open_challenge_submissions"> | string | null
    caption?: StringNullableFilter<"open_challenge_submissions"> | string | null
    time_submitted?: DateTimeFilter<"open_challenge_submissions"> | Date | string
    open_challenges?: XOR<Open_challengesScalarRelationFilter, open_challengesWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, profileWhereInput>
  }, "open_submission_id" | "user_id_challenge_id">

  export type open_challenge_submissionsOrderByWithAggregationInput = {
    open_submission_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    user_id?: SortOrder
    media_url?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    time_submitted?: SortOrder
    _count?: open_challenge_submissionsCountOrderByAggregateInput
    _avg?: open_challenge_submissionsAvgOrderByAggregateInput
    _max?: open_challenge_submissionsMaxOrderByAggregateInput
    _min?: open_challenge_submissionsMinOrderByAggregateInput
    _sum?: open_challenge_submissionsSumOrderByAggregateInput
  }

  export type open_challenge_submissionsScalarWhereWithAggregatesInput = {
    AND?: open_challenge_submissionsScalarWhereWithAggregatesInput | open_challenge_submissionsScalarWhereWithAggregatesInput[]
    OR?: open_challenge_submissionsScalarWhereWithAggregatesInput[]
    NOT?: open_challenge_submissionsScalarWhereWithAggregatesInput | open_challenge_submissionsScalarWhereWithAggregatesInput[]
    open_submission_id?: IntWithAggregatesFilter<"open_challenge_submissions"> | number
    challenge_id?: IntWithAggregatesFilter<"open_challenge_submissions"> | number
    c_target?: Enumc_target_typeWithAggregatesFilter<"open_challenge_submissions"> | $Enums.c_target_type
    user_id?: StringWithAggregatesFilter<"open_challenge_submissions"> | string
    media_url?: StringNullableWithAggregatesFilter<"open_challenge_submissions"> | string | null
    caption?: StringNullableWithAggregatesFilter<"open_challenge_submissions"> | string | null
    time_submitted?: DateTimeWithAggregatesFilter<"open_challenge_submissions"> | Date | string
  }

  export type targeted_challenges_betsWhereInput = {
    AND?: targeted_challenges_betsWhereInput | targeted_challenges_betsWhereInput[]
    OR?: targeted_challenges_betsWhereInput[]
    NOT?: targeted_challenges_betsWhereInput | targeted_challenges_betsWhereInput[]
    bet_id?: IntFilter<"targeted_challenges_bets"> | number
    challenge_id?: IntFilter<"targeted_challenges_bets"> | number
    c_target?: Enumc_target_typeFilter<"targeted_challenges_bets"> | $Enums.c_target_type
    bet_direction?: Enumcast_directionFilter<"targeted_challenges_bets"> | $Enums.cast_direction
    bet_magnitude?: IntFilter<"targeted_challenges_bets"> | number
    bettor_id?: StringFilter<"targeted_challenges_bets"> | string
    profile?: XOR<ProfileScalarRelationFilter, profileWhereInput>
    targeted_challenges?: XOR<Targeted_challengesScalarRelationFilter, targeted_challengesWhereInput>
  }

  export type targeted_challenges_betsOrderByWithRelationInput = {
    bet_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    bet_direction?: SortOrder
    bet_magnitude?: SortOrder
    bettor_id?: SortOrder
    profile?: profileOrderByWithRelationInput
    targeted_challenges?: targeted_challengesOrderByWithRelationInput
  }

  export type targeted_challenges_betsWhereUniqueInput = Prisma.AtLeast<{
    bet_id?: number
    bettor_id_challenge_id?: targeted_challenges_betsBettor_idChallenge_idCompoundUniqueInput
    AND?: targeted_challenges_betsWhereInput | targeted_challenges_betsWhereInput[]
    OR?: targeted_challenges_betsWhereInput[]
    NOT?: targeted_challenges_betsWhereInput | targeted_challenges_betsWhereInput[]
    challenge_id?: IntFilter<"targeted_challenges_bets"> | number
    c_target?: Enumc_target_typeFilter<"targeted_challenges_bets"> | $Enums.c_target_type
    bet_direction?: Enumcast_directionFilter<"targeted_challenges_bets"> | $Enums.cast_direction
    bet_magnitude?: IntFilter<"targeted_challenges_bets"> | number
    bettor_id?: StringFilter<"targeted_challenges_bets"> | string
    profile?: XOR<ProfileScalarRelationFilter, profileWhereInput>
    targeted_challenges?: XOR<Targeted_challengesScalarRelationFilter, targeted_challengesWhereInput>
  }, "bet_id" | "bettor_id_challenge_id">

  export type targeted_challenges_betsOrderByWithAggregationInput = {
    bet_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    bet_direction?: SortOrder
    bet_magnitude?: SortOrder
    bettor_id?: SortOrder
    _count?: targeted_challenges_betsCountOrderByAggregateInput
    _avg?: targeted_challenges_betsAvgOrderByAggregateInput
    _max?: targeted_challenges_betsMaxOrderByAggregateInput
    _min?: targeted_challenges_betsMinOrderByAggregateInput
    _sum?: targeted_challenges_betsSumOrderByAggregateInput
  }

  export type targeted_challenges_betsScalarWhereWithAggregatesInput = {
    AND?: targeted_challenges_betsScalarWhereWithAggregatesInput | targeted_challenges_betsScalarWhereWithAggregatesInput[]
    OR?: targeted_challenges_betsScalarWhereWithAggregatesInput[]
    NOT?: targeted_challenges_betsScalarWhereWithAggregatesInput | targeted_challenges_betsScalarWhereWithAggregatesInput[]
    bet_id?: IntWithAggregatesFilter<"targeted_challenges_bets"> | number
    challenge_id?: IntWithAggregatesFilter<"targeted_challenges_bets"> | number
    c_target?: Enumc_target_typeWithAggregatesFilter<"targeted_challenges_bets"> | $Enums.c_target_type
    bet_direction?: Enumcast_directionWithAggregatesFilter<"targeted_challenges_bets"> | $Enums.cast_direction
    bet_magnitude?: IntWithAggregatesFilter<"targeted_challenges_bets"> | number
    bettor_id?: StringWithAggregatesFilter<"targeted_challenges_bets"> | string
  }

  export type targeted_challenges_submissionWhereInput = {
    AND?: targeted_challenges_submissionWhereInput | targeted_challenges_submissionWhereInput[]
    OR?: targeted_challenges_submissionWhereInput[]
    NOT?: targeted_challenges_submissionWhereInput | targeted_challenges_submissionWhereInput[]
    submission_id?: IntFilter<"targeted_challenges_submission"> | number
    challenge_id?: IntFilter<"targeted_challenges_submission"> | number
    c_target?: Enumc_target_typeFilter<"targeted_challenges_submission"> | $Enums.c_target_type
    submitter_id?: StringFilter<"targeted_challenges_submission"> | string
    media_url?: StringNullableFilter<"targeted_challenges_submission"> | string | null
    caption?: StringNullableFilter<"targeted_challenges_submission"> | string | null
    time_submitted?: DateTimeFilter<"targeted_challenges_submission"> | Date | string
    targeted_challenges?: XOR<Targeted_challengesScalarRelationFilter, targeted_challengesWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, profileWhereInput>
  }

  export type targeted_challenges_submissionOrderByWithRelationInput = {
    submission_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    submitter_id?: SortOrder
    media_url?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    time_submitted?: SortOrder
    targeted_challenges?: targeted_challengesOrderByWithRelationInput
    profile?: profileOrderByWithRelationInput
  }

  export type targeted_challenges_submissionWhereUniqueInput = Prisma.AtLeast<{
    submission_id?: number
    submitter_id_challenge_id?: targeted_challenges_submissionSubmitter_idChallenge_idCompoundUniqueInput
    AND?: targeted_challenges_submissionWhereInput | targeted_challenges_submissionWhereInput[]
    OR?: targeted_challenges_submissionWhereInput[]
    NOT?: targeted_challenges_submissionWhereInput | targeted_challenges_submissionWhereInput[]
    challenge_id?: IntFilter<"targeted_challenges_submission"> | number
    c_target?: Enumc_target_typeFilter<"targeted_challenges_submission"> | $Enums.c_target_type
    submitter_id?: StringFilter<"targeted_challenges_submission"> | string
    media_url?: StringNullableFilter<"targeted_challenges_submission"> | string | null
    caption?: StringNullableFilter<"targeted_challenges_submission"> | string | null
    time_submitted?: DateTimeFilter<"targeted_challenges_submission"> | Date | string
    targeted_challenges?: XOR<Targeted_challengesScalarRelationFilter, targeted_challengesWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, profileWhereInput>
  }, "submission_id" | "submitter_id_challenge_id">

  export type targeted_challenges_submissionOrderByWithAggregationInput = {
    submission_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    submitter_id?: SortOrder
    media_url?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    time_submitted?: SortOrder
    _count?: targeted_challenges_submissionCountOrderByAggregateInput
    _avg?: targeted_challenges_submissionAvgOrderByAggregateInput
    _max?: targeted_challenges_submissionMaxOrderByAggregateInput
    _min?: targeted_challenges_submissionMinOrderByAggregateInput
    _sum?: targeted_challenges_submissionSumOrderByAggregateInput
  }

  export type targeted_challenges_submissionScalarWhereWithAggregatesInput = {
    AND?: targeted_challenges_submissionScalarWhereWithAggregatesInput | targeted_challenges_submissionScalarWhereWithAggregatesInput[]
    OR?: targeted_challenges_submissionScalarWhereWithAggregatesInput[]
    NOT?: targeted_challenges_submissionScalarWhereWithAggregatesInput | targeted_challenges_submissionScalarWhereWithAggregatesInput[]
    submission_id?: IntWithAggregatesFilter<"targeted_challenges_submission"> | number
    challenge_id?: IntWithAggregatesFilter<"targeted_challenges_submission"> | number
    c_target?: Enumc_target_typeWithAggregatesFilter<"targeted_challenges_submission"> | $Enums.c_target_type
    submitter_id?: StringWithAggregatesFilter<"targeted_challenges_submission"> | string
    media_url?: StringNullableWithAggregatesFilter<"targeted_challenges_submission"> | string | null
    caption?: StringNullableWithAggregatesFilter<"targeted_challenges_submission"> | string | null
    time_submitted?: DateTimeWithAggregatesFilter<"targeted_challenges_submission"> | Date | string
  }

  export type targeted_challenges_votesWhereInput = {
    AND?: targeted_challenges_votesWhereInput | targeted_challenges_votesWhereInput[]
    OR?: targeted_challenges_votesWhereInput[]
    NOT?: targeted_challenges_votesWhereInput | targeted_challenges_votesWhereInput[]
    vote_id?: IntFilter<"targeted_challenges_votes"> | number
    challenge_id?: IntFilter<"targeted_challenges_votes"> | number
    c_target?: Enumc_target_typeFilter<"targeted_challenges_votes"> | $Enums.c_target_type
    vote_direction?: Enumcast_directionFilter<"targeted_challenges_votes"> | $Enums.cast_direction
    voter_id?: StringFilter<"targeted_challenges_votes"> | string
    targeted_challenges?: XOR<Targeted_challengesScalarRelationFilter, targeted_challengesWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, profileWhereInput>
  }

  export type targeted_challenges_votesOrderByWithRelationInput = {
    vote_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    vote_direction?: SortOrder
    voter_id?: SortOrder
    targeted_challenges?: targeted_challengesOrderByWithRelationInput
    profile?: profileOrderByWithRelationInput
  }

  export type targeted_challenges_votesWhereUniqueInput = Prisma.AtLeast<{
    vote_id?: number
    voter_id_challenge_id?: targeted_challenges_votesVoter_idChallenge_idCompoundUniqueInput
    AND?: targeted_challenges_votesWhereInput | targeted_challenges_votesWhereInput[]
    OR?: targeted_challenges_votesWhereInput[]
    NOT?: targeted_challenges_votesWhereInput | targeted_challenges_votesWhereInput[]
    challenge_id?: IntFilter<"targeted_challenges_votes"> | number
    c_target?: Enumc_target_typeFilter<"targeted_challenges_votes"> | $Enums.c_target_type
    vote_direction?: Enumcast_directionFilter<"targeted_challenges_votes"> | $Enums.cast_direction
    voter_id?: StringFilter<"targeted_challenges_votes"> | string
    targeted_challenges?: XOR<Targeted_challengesScalarRelationFilter, targeted_challengesWhereInput>
    profile?: XOR<ProfileScalarRelationFilter, profileWhereInput>
  }, "vote_id" | "voter_id_challenge_id">

  export type targeted_challenges_votesOrderByWithAggregationInput = {
    vote_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    vote_direction?: SortOrder
    voter_id?: SortOrder
    _count?: targeted_challenges_votesCountOrderByAggregateInput
    _avg?: targeted_challenges_votesAvgOrderByAggregateInput
    _max?: targeted_challenges_votesMaxOrderByAggregateInput
    _min?: targeted_challenges_votesMinOrderByAggregateInput
    _sum?: targeted_challenges_votesSumOrderByAggregateInput
  }

  export type targeted_challenges_votesScalarWhereWithAggregatesInput = {
    AND?: targeted_challenges_votesScalarWhereWithAggregatesInput | targeted_challenges_votesScalarWhereWithAggregatesInput[]
    OR?: targeted_challenges_votesScalarWhereWithAggregatesInput[]
    NOT?: targeted_challenges_votesScalarWhereWithAggregatesInput | targeted_challenges_votesScalarWhereWithAggregatesInput[]
    vote_id?: IntWithAggregatesFilter<"targeted_challenges_votes"> | number
    challenge_id?: IntWithAggregatesFilter<"targeted_challenges_votes"> | number
    c_target?: Enumc_target_typeWithAggregatesFilter<"targeted_challenges_votes"> | $Enums.c_target_type
    vote_direction?: Enumcast_directionWithAggregatesFilter<"targeted_challenges_votes"> | $Enums.cast_direction
    voter_id?: StringWithAggregatesFilter<"targeted_challenges_votes"> | string
  }

  export type challengesCreateInput = {
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
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
    open_challenges?: open_challengesUncheckedCreateNestedOneWithoutChallengesInput
    targeted_challenges?: targeted_challengesUncheckedCreateNestedOneWithoutChallengesInput
  }

  export type challengesUpdateInput = {
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
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
    open_challenge_submissions?: open_challenge_submissionsCreateNestedManyWithoutOpen_challengesInput
    challenges: challengesCreateNestedOneWithoutOpen_challengesInput
  }

  export type open_challengesUncheckedCreateInput = {
    challenge_id: number
    c_target?: $Enums.c_target_type
    submissions?: number
    open_challenge_submissions?: open_challenge_submissionsUncheckedCreateNestedManyWithoutOpen_challengesInput
  }

  export type open_challengesUpdateInput = {
    submissions?: IntFieldUpdateOperationsInput | number
    open_challenge_submissions?: open_challenge_submissionsUpdateManyWithoutOpen_challengesNestedInput
    challenges?: challengesUpdateOneRequiredWithoutOpen_challengesNestedInput
  }

  export type open_challengesUncheckedUpdateInput = {
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    submissions?: IntFieldUpdateOperationsInput | number
    open_challenge_submissions?: open_challenge_submissionsUncheckedUpdateManyWithoutOpen_challengesNestedInput
  }

  export type open_challengesCreateManyInput = {
    challenge_id: number
    c_target?: $Enums.c_target_type
    submissions?: number
  }

  export type open_challengesUpdateManyMutationInput = {
    submissions?: IntFieldUpdateOperationsInput | number
  }

  export type open_challengesUncheckedUpdateManyInput = {
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    submissions?: IntFieldUpdateOperationsInput | number
  }

  export type targeted_challengesCreateInput = {
    specific_target: string
    votes_for?: number
    votes_against?: number
    bettors_for?: number
    bettors_against?: number
    bet_spread_total?: number
    bet_spread_for?: number
    bet_spread_against?: number
    challenges: challengesCreateNestedOneWithoutTargeted_challengesInput
    targeted_challenges_bets?: targeted_challenges_betsCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_submission?: targeted_challenges_submissionCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_votes?: targeted_challenges_votesCreateNestedManyWithoutTargeted_challengesInput
  }

  export type targeted_challengesUncheckedCreateInput = {
    challenge_id: number
    c_target?: $Enums.c_target_type
    specific_target: string
    votes_for?: number
    votes_against?: number
    bettors_for?: number
    bettors_against?: number
    bet_spread_total?: number
    bet_spread_for?: number
    bet_spread_against?: number
    targeted_challenges_bets?: targeted_challenges_betsUncheckedCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedCreateNestedManyWithoutTargeted_challengesInput
  }

  export type targeted_challengesUpdateInput = {
    specific_target?: StringFieldUpdateOperationsInput | string
    votes_for?: IntFieldUpdateOperationsInput | number
    votes_against?: IntFieldUpdateOperationsInput | number
    bettors_for?: IntFieldUpdateOperationsInput | number
    bettors_against?: IntFieldUpdateOperationsInput | number
    bet_spread_total?: IntFieldUpdateOperationsInput | number
    bet_spread_for?: IntFieldUpdateOperationsInput | number
    bet_spread_against?: IntFieldUpdateOperationsInput | number
    challenges?: challengesUpdateOneRequiredWithoutTargeted_challengesNestedInput
    targeted_challenges_bets?: targeted_challenges_betsUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUpdateManyWithoutTargeted_challengesNestedInput
  }

  export type targeted_challengesUncheckedUpdateInput = {
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    specific_target?: StringFieldUpdateOperationsInput | string
    votes_for?: IntFieldUpdateOperationsInput | number
    votes_against?: IntFieldUpdateOperationsInput | number
    bettors_for?: IntFieldUpdateOperationsInput | number
    bettors_against?: IntFieldUpdateOperationsInput | number
    bet_spread_total?: IntFieldUpdateOperationsInput | number
    bet_spread_for?: IntFieldUpdateOperationsInput | number
    bet_spread_against?: IntFieldUpdateOperationsInput | number
    targeted_challenges_bets?: targeted_challenges_betsUncheckedUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedUpdateManyWithoutTargeted_challengesNestedInput
  }

  export type targeted_challengesCreateManyInput = {
    challenge_id: number
    c_target?: $Enums.c_target_type
    specific_target: string
    votes_for?: number
    votes_against?: number
    bettors_for?: number
    bettors_against?: number
    bet_spread_total?: number
    bet_spread_for?: number
    bet_spread_against?: number
  }

  export type targeted_challengesUpdateManyMutationInput = {
    specific_target?: StringFieldUpdateOperationsInput | string
    votes_for?: IntFieldUpdateOperationsInput | number
    votes_against?: IntFieldUpdateOperationsInput | number
    bettors_for?: IntFieldUpdateOperationsInput | number
    bettors_against?: IntFieldUpdateOperationsInput | number
    bet_spread_total?: IntFieldUpdateOperationsInput | number
    bet_spread_for?: IntFieldUpdateOperationsInput | number
    bet_spread_against?: IntFieldUpdateOperationsInput | number
  }

  export type targeted_challengesUncheckedUpdateManyInput = {
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    specific_target?: StringFieldUpdateOperationsInput | string
    votes_for?: IntFieldUpdateOperationsInput | number
    votes_against?: IntFieldUpdateOperationsInput | number
    bettors_for?: IntFieldUpdateOperationsInput | number
    bettors_against?: IntFieldUpdateOperationsInput | number
    bet_spread_total?: IntFieldUpdateOperationsInput | number
    bet_spread_for?: IntFieldUpdateOperationsInput | number
    bet_spread_against?: IntFieldUpdateOperationsInput | number
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
    challenges?: challengesCreateNestedManyWithoutProfileInput
    open_challenge_submissions?: open_challenge_submissionsCreateNestedManyWithoutProfileInput
    targeted_challenges_bets?: targeted_challenges_betsCreateNestedManyWithoutProfileInput
    targeted_challenges_submission?: targeted_challenges_submissionCreateNestedManyWithoutProfileInput
    targeted_challenges_votes?: targeted_challenges_votesCreateNestedManyWithoutProfileInput
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
    challenges?: challengesUncheckedCreateNestedManyWithoutProfileInput
    open_challenge_submissions?: open_challenge_submissionsUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_bets?: targeted_challenges_betsUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedCreateNestedManyWithoutProfileInput
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
    challenges?: challengesUpdateManyWithoutProfileNestedInput
    open_challenge_submissions?: open_challenge_submissionsUpdateManyWithoutProfileNestedInput
    targeted_challenges_bets?: targeted_challenges_betsUpdateManyWithoutProfileNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUpdateManyWithoutProfileNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUpdateManyWithoutProfileNestedInput
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
    challenges?: challengesUncheckedUpdateManyWithoutProfileNestedInput
    open_challenge_submissions?: open_challenge_submissionsUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_bets?: targeted_challenges_betsUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedUpdateManyWithoutProfileNestedInput
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

  export type open_challenge_submissionsCreateInput = {
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
    open_challenges: open_challengesCreateNestedOneWithoutOpen_challenge_submissionsInput
    profile: profileCreateNestedOneWithoutOpen_challenge_submissionsInput
  }

  export type open_challenge_submissionsUncheckedCreateInput = {
    open_submission_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    user_id: string
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
  }

  export type open_challenge_submissionsUpdateInput = {
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
    open_challenges?: open_challengesUpdateOneRequiredWithoutOpen_challenge_submissionsNestedInput
    profile?: profileUpdateOneRequiredWithoutOpen_challenge_submissionsNestedInput
  }

  export type open_challenge_submissionsUncheckedUpdateInput = {
    open_submission_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    user_id?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type open_challenge_submissionsCreateManyInput = {
    open_submission_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    user_id: string
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
  }

  export type open_challenge_submissionsUpdateManyMutationInput = {
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type open_challenge_submissionsUncheckedUpdateManyInput = {
    open_submission_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    user_id?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type targeted_challenges_betsCreateInput = {
    bet_direction: $Enums.cast_direction
    bet_magnitude: number
    profile: profileCreateNestedOneWithoutTargeted_challenges_betsInput
    targeted_challenges: targeted_challengesCreateNestedOneWithoutTargeted_challenges_betsInput
  }

  export type targeted_challenges_betsUncheckedCreateInput = {
    bet_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    bet_direction: $Enums.cast_direction
    bet_magnitude: number
    bettor_id: string
  }

  export type targeted_challenges_betsUpdateInput = {
    bet_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    bet_magnitude?: IntFieldUpdateOperationsInput | number
    profile?: profileUpdateOneRequiredWithoutTargeted_challenges_betsNestedInput
    targeted_challenges?: targeted_challengesUpdateOneRequiredWithoutTargeted_challenges_betsNestedInput
  }

  export type targeted_challenges_betsUncheckedUpdateInput = {
    bet_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    bet_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    bet_magnitude?: IntFieldUpdateOperationsInput | number
    bettor_id?: StringFieldUpdateOperationsInput | string
  }

  export type targeted_challenges_betsCreateManyInput = {
    bet_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    bet_direction: $Enums.cast_direction
    bet_magnitude: number
    bettor_id: string
  }

  export type targeted_challenges_betsUpdateManyMutationInput = {
    bet_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    bet_magnitude?: IntFieldUpdateOperationsInput | number
  }

  export type targeted_challenges_betsUncheckedUpdateManyInput = {
    bet_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    bet_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    bet_magnitude?: IntFieldUpdateOperationsInput | number
    bettor_id?: StringFieldUpdateOperationsInput | string
  }

  export type targeted_challenges_submissionCreateInput = {
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
    targeted_challenges: targeted_challengesCreateNestedOneWithoutTargeted_challenges_submissionInput
    profile: profileCreateNestedOneWithoutTargeted_challenges_submissionInput
  }

  export type targeted_challenges_submissionUncheckedCreateInput = {
    submission_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    submitter_id: string
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
  }

  export type targeted_challenges_submissionUpdateInput = {
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
    targeted_challenges?: targeted_challengesUpdateOneRequiredWithoutTargeted_challenges_submissionNestedInput
    profile?: profileUpdateOneRequiredWithoutTargeted_challenges_submissionNestedInput
  }

  export type targeted_challenges_submissionUncheckedUpdateInput = {
    submission_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    submitter_id?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type targeted_challenges_submissionCreateManyInput = {
    submission_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    submitter_id: string
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
  }

  export type targeted_challenges_submissionUpdateManyMutationInput = {
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type targeted_challenges_submissionUncheckedUpdateManyInput = {
    submission_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    submitter_id?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type targeted_challenges_votesCreateInput = {
    vote_direction: $Enums.cast_direction
    targeted_challenges: targeted_challengesCreateNestedOneWithoutTargeted_challenges_votesInput
    profile: profileCreateNestedOneWithoutTargeted_challenges_votesInput
  }

  export type targeted_challenges_votesUncheckedCreateInput = {
    vote_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    vote_direction: $Enums.cast_direction
    voter_id: string
  }

  export type targeted_challenges_votesUpdateInput = {
    vote_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    targeted_challenges?: targeted_challengesUpdateOneRequiredWithoutTargeted_challenges_votesNestedInput
    profile?: profileUpdateOneRequiredWithoutTargeted_challenges_votesNestedInput
  }

  export type targeted_challenges_votesUncheckedUpdateInput = {
    vote_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    vote_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    voter_id?: StringFieldUpdateOperationsInput | string
  }

  export type targeted_challenges_votesCreateManyInput = {
    vote_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    vote_direction: $Enums.cast_direction
    voter_id: string
  }

  export type targeted_challenges_votesUpdateManyMutationInput = {
    vote_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
  }

  export type targeted_challenges_votesUncheckedUpdateManyInput = {
    vote_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    vote_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    voter_id?: StringFieldUpdateOperationsInput | string
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

  export type challengesIdC_targetCompoundUniqueInput = {
    id: number
    c_target: $Enums.c_target_type
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

  export type Open_challenge_submissionsListRelationFilter = {
    every?: open_challenge_submissionsWhereInput
    some?: open_challenge_submissionsWhereInput
    none?: open_challenge_submissionsWhereInput
  }

  export type ChallengesScalarRelationFilter = {
    is?: challengesWhereInput
    isNot?: challengesWhereInput
  }

  export type open_challenge_submissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type open_challengesChallenge_idC_targetCompoundUniqueInput = {
    challenge_id: number
    c_target: $Enums.c_target_type
  }

  export type open_challengesCountOrderByAggregateInput = {
    challenge_id?: SortOrder
    c_target?: SortOrder
    submissions?: SortOrder
  }

  export type open_challengesAvgOrderByAggregateInput = {
    challenge_id?: SortOrder
    submissions?: SortOrder
  }

  export type open_challengesMaxOrderByAggregateInput = {
    challenge_id?: SortOrder
    c_target?: SortOrder
    submissions?: SortOrder
  }

  export type open_challengesMinOrderByAggregateInput = {
    challenge_id?: SortOrder
    c_target?: SortOrder
    submissions?: SortOrder
  }

  export type open_challengesSumOrderByAggregateInput = {
    challenge_id?: SortOrder
    submissions?: SortOrder
  }

  export type Targeted_challenges_betsListRelationFilter = {
    every?: targeted_challenges_betsWhereInput
    some?: targeted_challenges_betsWhereInput
    none?: targeted_challenges_betsWhereInput
  }

  export type Targeted_challenges_submissionListRelationFilter = {
    every?: targeted_challenges_submissionWhereInput
    some?: targeted_challenges_submissionWhereInput
    none?: targeted_challenges_submissionWhereInput
  }

  export type Targeted_challenges_votesListRelationFilter = {
    every?: targeted_challenges_votesWhereInput
    some?: targeted_challenges_votesWhereInput
    none?: targeted_challenges_votesWhereInput
  }

  export type targeted_challenges_betsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type targeted_challenges_submissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type targeted_challenges_votesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type targeted_challengesChallenge_idC_targetCompoundUniqueInput = {
    challenge_id: number
    c_target: $Enums.c_target_type
  }

  export type targeted_challengesCountOrderByAggregateInput = {
    challenge_id?: SortOrder
    c_target?: SortOrder
    specific_target?: SortOrder
    votes_for?: SortOrder
    votes_against?: SortOrder
    bettors_for?: SortOrder
    bettors_against?: SortOrder
    bet_spread_total?: SortOrder
    bet_spread_for?: SortOrder
    bet_spread_against?: SortOrder
  }

  export type targeted_challengesAvgOrderByAggregateInput = {
    challenge_id?: SortOrder
    votes_for?: SortOrder
    votes_against?: SortOrder
    bettors_for?: SortOrder
    bettors_against?: SortOrder
    bet_spread_total?: SortOrder
    bet_spread_for?: SortOrder
    bet_spread_against?: SortOrder
  }

  export type targeted_challengesMaxOrderByAggregateInput = {
    challenge_id?: SortOrder
    c_target?: SortOrder
    specific_target?: SortOrder
    votes_for?: SortOrder
    votes_against?: SortOrder
    bettors_for?: SortOrder
    bettors_against?: SortOrder
    bet_spread_total?: SortOrder
    bet_spread_for?: SortOrder
    bet_spread_against?: SortOrder
  }

  export type targeted_challengesMinOrderByAggregateInput = {
    challenge_id?: SortOrder
    c_target?: SortOrder
    specific_target?: SortOrder
    votes_for?: SortOrder
    votes_against?: SortOrder
    bettors_for?: SortOrder
    bettors_against?: SortOrder
    bet_spread_total?: SortOrder
    bet_spread_for?: SortOrder
    bet_spread_against?: SortOrder
  }

  export type targeted_challengesSumOrderByAggregateInput = {
    challenge_id?: SortOrder
    votes_for?: SortOrder
    votes_against?: SortOrder
    bettors_for?: SortOrder
    bettors_against?: SortOrder
    bet_spread_total?: SortOrder
    bet_spread_for?: SortOrder
    bet_spread_against?: SortOrder
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

  export type Open_challengesScalarRelationFilter = {
    is?: open_challengesWhereInput
    isNot?: open_challengesWhereInput
  }

  export type ProfileScalarRelationFilter = {
    is?: profileWhereInput
    isNot?: profileWhereInput
  }

  export type open_challenge_submissionsUser_idChallenge_idCompoundUniqueInput = {
    user_id: string
    challenge_id: number
  }

  export type open_challenge_submissionsCountOrderByAggregateInput = {
    open_submission_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    user_id?: SortOrder
    media_url?: SortOrder
    caption?: SortOrder
    time_submitted?: SortOrder
  }

  export type open_challenge_submissionsAvgOrderByAggregateInput = {
    open_submission_id?: SortOrder
    challenge_id?: SortOrder
  }

  export type open_challenge_submissionsMaxOrderByAggregateInput = {
    open_submission_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    user_id?: SortOrder
    media_url?: SortOrder
    caption?: SortOrder
    time_submitted?: SortOrder
  }

  export type open_challenge_submissionsMinOrderByAggregateInput = {
    open_submission_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    user_id?: SortOrder
    media_url?: SortOrder
    caption?: SortOrder
    time_submitted?: SortOrder
  }

  export type open_challenge_submissionsSumOrderByAggregateInput = {
    open_submission_id?: SortOrder
    challenge_id?: SortOrder
  }

  export type Enumcast_directionFilter<$PrismaModel = never> = {
    equals?: $Enums.cast_direction | Enumcast_directionFieldRefInput<$PrismaModel>
    in?: $Enums.cast_direction[] | ListEnumcast_directionFieldRefInput<$PrismaModel>
    notIn?: $Enums.cast_direction[] | ListEnumcast_directionFieldRefInput<$PrismaModel>
    not?: NestedEnumcast_directionFilter<$PrismaModel> | $Enums.cast_direction
  }

  export type Targeted_challengesScalarRelationFilter = {
    is?: targeted_challengesWhereInput
    isNot?: targeted_challengesWhereInput
  }

  export type targeted_challenges_betsBettor_idChallenge_idCompoundUniqueInput = {
    bettor_id: string
    challenge_id: number
  }

  export type targeted_challenges_betsCountOrderByAggregateInput = {
    bet_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    bet_direction?: SortOrder
    bet_magnitude?: SortOrder
    bettor_id?: SortOrder
  }

  export type targeted_challenges_betsAvgOrderByAggregateInput = {
    bet_id?: SortOrder
    challenge_id?: SortOrder
    bet_magnitude?: SortOrder
  }

  export type targeted_challenges_betsMaxOrderByAggregateInput = {
    bet_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    bet_direction?: SortOrder
    bet_magnitude?: SortOrder
    bettor_id?: SortOrder
  }

  export type targeted_challenges_betsMinOrderByAggregateInput = {
    bet_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    bet_direction?: SortOrder
    bet_magnitude?: SortOrder
    bettor_id?: SortOrder
  }

  export type targeted_challenges_betsSumOrderByAggregateInput = {
    bet_id?: SortOrder
    challenge_id?: SortOrder
    bet_magnitude?: SortOrder
  }

  export type Enumcast_directionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cast_direction | Enumcast_directionFieldRefInput<$PrismaModel>
    in?: $Enums.cast_direction[] | ListEnumcast_directionFieldRefInput<$PrismaModel>
    notIn?: $Enums.cast_direction[] | ListEnumcast_directionFieldRefInput<$PrismaModel>
    not?: NestedEnumcast_directionWithAggregatesFilter<$PrismaModel> | $Enums.cast_direction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcast_directionFilter<$PrismaModel>
    _max?: NestedEnumcast_directionFilter<$PrismaModel>
  }

  export type targeted_challenges_submissionSubmitter_idChallenge_idCompoundUniqueInput = {
    submitter_id: string
    challenge_id: number
  }

  export type targeted_challenges_submissionCountOrderByAggregateInput = {
    submission_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    submitter_id?: SortOrder
    media_url?: SortOrder
    caption?: SortOrder
    time_submitted?: SortOrder
  }

  export type targeted_challenges_submissionAvgOrderByAggregateInput = {
    submission_id?: SortOrder
    challenge_id?: SortOrder
  }

  export type targeted_challenges_submissionMaxOrderByAggregateInput = {
    submission_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    submitter_id?: SortOrder
    media_url?: SortOrder
    caption?: SortOrder
    time_submitted?: SortOrder
  }

  export type targeted_challenges_submissionMinOrderByAggregateInput = {
    submission_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    submitter_id?: SortOrder
    media_url?: SortOrder
    caption?: SortOrder
    time_submitted?: SortOrder
  }

  export type targeted_challenges_submissionSumOrderByAggregateInput = {
    submission_id?: SortOrder
    challenge_id?: SortOrder
  }

  export type targeted_challenges_votesVoter_idChallenge_idCompoundUniqueInput = {
    voter_id: string
    challenge_id: number
  }

  export type targeted_challenges_votesCountOrderByAggregateInput = {
    vote_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    vote_direction?: SortOrder
    voter_id?: SortOrder
  }

  export type targeted_challenges_votesAvgOrderByAggregateInput = {
    vote_id?: SortOrder
    challenge_id?: SortOrder
  }

  export type targeted_challenges_votesMaxOrderByAggregateInput = {
    vote_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    vote_direction?: SortOrder
    voter_id?: SortOrder
  }

  export type targeted_challenges_votesMinOrderByAggregateInput = {
    vote_id?: SortOrder
    challenge_id?: SortOrder
    c_target?: SortOrder
    vote_direction?: SortOrder
    voter_id?: SortOrder
  }

  export type targeted_challenges_votesSumOrderByAggregateInput = {
    vote_id?: SortOrder
    challenge_id?: SortOrder
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

  export type open_challenge_submissionsCreateNestedManyWithoutOpen_challengesInput = {
    create?: XOR<open_challenge_submissionsCreateWithoutOpen_challengesInput, open_challenge_submissionsUncheckedCreateWithoutOpen_challengesInput> | open_challenge_submissionsCreateWithoutOpen_challengesInput[] | open_challenge_submissionsUncheckedCreateWithoutOpen_challengesInput[]
    connectOrCreate?: open_challenge_submissionsCreateOrConnectWithoutOpen_challengesInput | open_challenge_submissionsCreateOrConnectWithoutOpen_challengesInput[]
    createMany?: open_challenge_submissionsCreateManyOpen_challengesInputEnvelope
    connect?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
  }

  export type challengesCreateNestedOneWithoutOpen_challengesInput = {
    create?: XOR<challengesCreateWithoutOpen_challengesInput, challengesUncheckedCreateWithoutOpen_challengesInput>
    connectOrCreate?: challengesCreateOrConnectWithoutOpen_challengesInput
    connect?: challengesWhereUniqueInput
  }

  export type open_challenge_submissionsUncheckedCreateNestedManyWithoutOpen_challengesInput = {
    create?: XOR<open_challenge_submissionsCreateWithoutOpen_challengesInput, open_challenge_submissionsUncheckedCreateWithoutOpen_challengesInput> | open_challenge_submissionsCreateWithoutOpen_challengesInput[] | open_challenge_submissionsUncheckedCreateWithoutOpen_challengesInput[]
    connectOrCreate?: open_challenge_submissionsCreateOrConnectWithoutOpen_challengesInput | open_challenge_submissionsCreateOrConnectWithoutOpen_challengesInput[]
    createMany?: open_challenge_submissionsCreateManyOpen_challengesInputEnvelope
    connect?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
  }

  export type open_challenge_submissionsUpdateManyWithoutOpen_challengesNestedInput = {
    create?: XOR<open_challenge_submissionsCreateWithoutOpen_challengesInput, open_challenge_submissionsUncheckedCreateWithoutOpen_challengesInput> | open_challenge_submissionsCreateWithoutOpen_challengesInput[] | open_challenge_submissionsUncheckedCreateWithoutOpen_challengesInput[]
    connectOrCreate?: open_challenge_submissionsCreateOrConnectWithoutOpen_challengesInput | open_challenge_submissionsCreateOrConnectWithoutOpen_challengesInput[]
    upsert?: open_challenge_submissionsUpsertWithWhereUniqueWithoutOpen_challengesInput | open_challenge_submissionsUpsertWithWhereUniqueWithoutOpen_challengesInput[]
    createMany?: open_challenge_submissionsCreateManyOpen_challengesInputEnvelope
    set?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    disconnect?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    delete?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    connect?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    update?: open_challenge_submissionsUpdateWithWhereUniqueWithoutOpen_challengesInput | open_challenge_submissionsUpdateWithWhereUniqueWithoutOpen_challengesInput[]
    updateMany?: open_challenge_submissionsUpdateManyWithWhereWithoutOpen_challengesInput | open_challenge_submissionsUpdateManyWithWhereWithoutOpen_challengesInput[]
    deleteMany?: open_challenge_submissionsScalarWhereInput | open_challenge_submissionsScalarWhereInput[]
  }

  export type challengesUpdateOneRequiredWithoutOpen_challengesNestedInput = {
    create?: XOR<challengesCreateWithoutOpen_challengesInput, challengesUncheckedCreateWithoutOpen_challengesInput>
    connectOrCreate?: challengesCreateOrConnectWithoutOpen_challengesInput
    upsert?: challengesUpsertWithoutOpen_challengesInput
    connect?: challengesWhereUniqueInput
    update?: XOR<XOR<challengesUpdateToOneWithWhereWithoutOpen_challengesInput, challengesUpdateWithoutOpen_challengesInput>, challengesUncheckedUpdateWithoutOpen_challengesInput>
  }

  export type open_challenge_submissionsUncheckedUpdateManyWithoutOpen_challengesNestedInput = {
    create?: XOR<open_challenge_submissionsCreateWithoutOpen_challengesInput, open_challenge_submissionsUncheckedCreateWithoutOpen_challengesInput> | open_challenge_submissionsCreateWithoutOpen_challengesInput[] | open_challenge_submissionsUncheckedCreateWithoutOpen_challengesInput[]
    connectOrCreate?: open_challenge_submissionsCreateOrConnectWithoutOpen_challengesInput | open_challenge_submissionsCreateOrConnectWithoutOpen_challengesInput[]
    upsert?: open_challenge_submissionsUpsertWithWhereUniqueWithoutOpen_challengesInput | open_challenge_submissionsUpsertWithWhereUniqueWithoutOpen_challengesInput[]
    createMany?: open_challenge_submissionsCreateManyOpen_challengesInputEnvelope
    set?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    disconnect?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    delete?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    connect?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    update?: open_challenge_submissionsUpdateWithWhereUniqueWithoutOpen_challengesInput | open_challenge_submissionsUpdateWithWhereUniqueWithoutOpen_challengesInput[]
    updateMany?: open_challenge_submissionsUpdateManyWithWhereWithoutOpen_challengesInput | open_challenge_submissionsUpdateManyWithWhereWithoutOpen_challengesInput[]
    deleteMany?: open_challenge_submissionsScalarWhereInput | open_challenge_submissionsScalarWhereInput[]
  }

  export type challengesCreateNestedOneWithoutTargeted_challengesInput = {
    create?: XOR<challengesCreateWithoutTargeted_challengesInput, challengesUncheckedCreateWithoutTargeted_challengesInput>
    connectOrCreate?: challengesCreateOrConnectWithoutTargeted_challengesInput
    connect?: challengesWhereUniqueInput
  }

  export type targeted_challenges_betsCreateNestedManyWithoutTargeted_challengesInput = {
    create?: XOR<targeted_challenges_betsCreateWithoutTargeted_challengesInput, targeted_challenges_betsUncheckedCreateWithoutTargeted_challengesInput> | targeted_challenges_betsCreateWithoutTargeted_challengesInput[] | targeted_challenges_betsUncheckedCreateWithoutTargeted_challengesInput[]
    connectOrCreate?: targeted_challenges_betsCreateOrConnectWithoutTargeted_challengesInput | targeted_challenges_betsCreateOrConnectWithoutTargeted_challengesInput[]
    createMany?: targeted_challenges_betsCreateManyTargeted_challengesInputEnvelope
    connect?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
  }

  export type targeted_challenges_submissionCreateNestedManyWithoutTargeted_challengesInput = {
    create?: XOR<targeted_challenges_submissionCreateWithoutTargeted_challengesInput, targeted_challenges_submissionUncheckedCreateWithoutTargeted_challengesInput> | targeted_challenges_submissionCreateWithoutTargeted_challengesInput[] | targeted_challenges_submissionUncheckedCreateWithoutTargeted_challengesInput[]
    connectOrCreate?: targeted_challenges_submissionCreateOrConnectWithoutTargeted_challengesInput | targeted_challenges_submissionCreateOrConnectWithoutTargeted_challengesInput[]
    createMany?: targeted_challenges_submissionCreateManyTargeted_challengesInputEnvelope
    connect?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
  }

  export type targeted_challenges_votesCreateNestedManyWithoutTargeted_challengesInput = {
    create?: XOR<targeted_challenges_votesCreateWithoutTargeted_challengesInput, targeted_challenges_votesUncheckedCreateWithoutTargeted_challengesInput> | targeted_challenges_votesCreateWithoutTargeted_challengesInput[] | targeted_challenges_votesUncheckedCreateWithoutTargeted_challengesInput[]
    connectOrCreate?: targeted_challenges_votesCreateOrConnectWithoutTargeted_challengesInput | targeted_challenges_votesCreateOrConnectWithoutTargeted_challengesInput[]
    createMany?: targeted_challenges_votesCreateManyTargeted_challengesInputEnvelope
    connect?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
  }

  export type targeted_challenges_betsUncheckedCreateNestedManyWithoutTargeted_challengesInput = {
    create?: XOR<targeted_challenges_betsCreateWithoutTargeted_challengesInput, targeted_challenges_betsUncheckedCreateWithoutTargeted_challengesInput> | targeted_challenges_betsCreateWithoutTargeted_challengesInput[] | targeted_challenges_betsUncheckedCreateWithoutTargeted_challengesInput[]
    connectOrCreate?: targeted_challenges_betsCreateOrConnectWithoutTargeted_challengesInput | targeted_challenges_betsCreateOrConnectWithoutTargeted_challengesInput[]
    createMany?: targeted_challenges_betsCreateManyTargeted_challengesInputEnvelope
    connect?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
  }

  export type targeted_challenges_submissionUncheckedCreateNestedManyWithoutTargeted_challengesInput = {
    create?: XOR<targeted_challenges_submissionCreateWithoutTargeted_challengesInput, targeted_challenges_submissionUncheckedCreateWithoutTargeted_challengesInput> | targeted_challenges_submissionCreateWithoutTargeted_challengesInput[] | targeted_challenges_submissionUncheckedCreateWithoutTargeted_challengesInput[]
    connectOrCreate?: targeted_challenges_submissionCreateOrConnectWithoutTargeted_challengesInput | targeted_challenges_submissionCreateOrConnectWithoutTargeted_challengesInput[]
    createMany?: targeted_challenges_submissionCreateManyTargeted_challengesInputEnvelope
    connect?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
  }

  export type targeted_challenges_votesUncheckedCreateNestedManyWithoutTargeted_challengesInput = {
    create?: XOR<targeted_challenges_votesCreateWithoutTargeted_challengesInput, targeted_challenges_votesUncheckedCreateWithoutTargeted_challengesInput> | targeted_challenges_votesCreateWithoutTargeted_challengesInput[] | targeted_challenges_votesUncheckedCreateWithoutTargeted_challengesInput[]
    connectOrCreate?: targeted_challenges_votesCreateOrConnectWithoutTargeted_challengesInput | targeted_challenges_votesCreateOrConnectWithoutTargeted_challengesInput[]
    createMany?: targeted_challenges_votesCreateManyTargeted_challengesInputEnvelope
    connect?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
  }

  export type challengesUpdateOneRequiredWithoutTargeted_challengesNestedInput = {
    create?: XOR<challengesCreateWithoutTargeted_challengesInput, challengesUncheckedCreateWithoutTargeted_challengesInput>
    connectOrCreate?: challengesCreateOrConnectWithoutTargeted_challengesInput
    upsert?: challengesUpsertWithoutTargeted_challengesInput
    connect?: challengesWhereUniqueInput
    update?: XOR<XOR<challengesUpdateToOneWithWhereWithoutTargeted_challengesInput, challengesUpdateWithoutTargeted_challengesInput>, challengesUncheckedUpdateWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_betsUpdateManyWithoutTargeted_challengesNestedInput = {
    create?: XOR<targeted_challenges_betsCreateWithoutTargeted_challengesInput, targeted_challenges_betsUncheckedCreateWithoutTargeted_challengesInput> | targeted_challenges_betsCreateWithoutTargeted_challengesInput[] | targeted_challenges_betsUncheckedCreateWithoutTargeted_challengesInput[]
    connectOrCreate?: targeted_challenges_betsCreateOrConnectWithoutTargeted_challengesInput | targeted_challenges_betsCreateOrConnectWithoutTargeted_challengesInput[]
    upsert?: targeted_challenges_betsUpsertWithWhereUniqueWithoutTargeted_challengesInput | targeted_challenges_betsUpsertWithWhereUniqueWithoutTargeted_challengesInput[]
    createMany?: targeted_challenges_betsCreateManyTargeted_challengesInputEnvelope
    set?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    disconnect?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    delete?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    connect?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    update?: targeted_challenges_betsUpdateWithWhereUniqueWithoutTargeted_challengesInput | targeted_challenges_betsUpdateWithWhereUniqueWithoutTargeted_challengesInput[]
    updateMany?: targeted_challenges_betsUpdateManyWithWhereWithoutTargeted_challengesInput | targeted_challenges_betsUpdateManyWithWhereWithoutTargeted_challengesInput[]
    deleteMany?: targeted_challenges_betsScalarWhereInput | targeted_challenges_betsScalarWhereInput[]
  }

  export type targeted_challenges_submissionUpdateManyWithoutTargeted_challengesNestedInput = {
    create?: XOR<targeted_challenges_submissionCreateWithoutTargeted_challengesInput, targeted_challenges_submissionUncheckedCreateWithoutTargeted_challengesInput> | targeted_challenges_submissionCreateWithoutTargeted_challengesInput[] | targeted_challenges_submissionUncheckedCreateWithoutTargeted_challengesInput[]
    connectOrCreate?: targeted_challenges_submissionCreateOrConnectWithoutTargeted_challengesInput | targeted_challenges_submissionCreateOrConnectWithoutTargeted_challengesInput[]
    upsert?: targeted_challenges_submissionUpsertWithWhereUniqueWithoutTargeted_challengesInput | targeted_challenges_submissionUpsertWithWhereUniqueWithoutTargeted_challengesInput[]
    createMany?: targeted_challenges_submissionCreateManyTargeted_challengesInputEnvelope
    set?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    disconnect?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    delete?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    connect?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    update?: targeted_challenges_submissionUpdateWithWhereUniqueWithoutTargeted_challengesInput | targeted_challenges_submissionUpdateWithWhereUniqueWithoutTargeted_challengesInput[]
    updateMany?: targeted_challenges_submissionUpdateManyWithWhereWithoutTargeted_challengesInput | targeted_challenges_submissionUpdateManyWithWhereWithoutTargeted_challengesInput[]
    deleteMany?: targeted_challenges_submissionScalarWhereInput | targeted_challenges_submissionScalarWhereInput[]
  }

  export type targeted_challenges_votesUpdateManyWithoutTargeted_challengesNestedInput = {
    create?: XOR<targeted_challenges_votesCreateWithoutTargeted_challengesInput, targeted_challenges_votesUncheckedCreateWithoutTargeted_challengesInput> | targeted_challenges_votesCreateWithoutTargeted_challengesInput[] | targeted_challenges_votesUncheckedCreateWithoutTargeted_challengesInput[]
    connectOrCreate?: targeted_challenges_votesCreateOrConnectWithoutTargeted_challengesInput | targeted_challenges_votesCreateOrConnectWithoutTargeted_challengesInput[]
    upsert?: targeted_challenges_votesUpsertWithWhereUniqueWithoutTargeted_challengesInput | targeted_challenges_votesUpsertWithWhereUniqueWithoutTargeted_challengesInput[]
    createMany?: targeted_challenges_votesCreateManyTargeted_challengesInputEnvelope
    set?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    disconnect?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    delete?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    connect?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    update?: targeted_challenges_votesUpdateWithWhereUniqueWithoutTargeted_challengesInput | targeted_challenges_votesUpdateWithWhereUniqueWithoutTargeted_challengesInput[]
    updateMany?: targeted_challenges_votesUpdateManyWithWhereWithoutTargeted_challengesInput | targeted_challenges_votesUpdateManyWithWhereWithoutTargeted_challengesInput[]
    deleteMany?: targeted_challenges_votesScalarWhereInput | targeted_challenges_votesScalarWhereInput[]
  }

  export type targeted_challenges_betsUncheckedUpdateManyWithoutTargeted_challengesNestedInput = {
    create?: XOR<targeted_challenges_betsCreateWithoutTargeted_challengesInput, targeted_challenges_betsUncheckedCreateWithoutTargeted_challengesInput> | targeted_challenges_betsCreateWithoutTargeted_challengesInput[] | targeted_challenges_betsUncheckedCreateWithoutTargeted_challengesInput[]
    connectOrCreate?: targeted_challenges_betsCreateOrConnectWithoutTargeted_challengesInput | targeted_challenges_betsCreateOrConnectWithoutTargeted_challengesInput[]
    upsert?: targeted_challenges_betsUpsertWithWhereUniqueWithoutTargeted_challengesInput | targeted_challenges_betsUpsertWithWhereUniqueWithoutTargeted_challengesInput[]
    createMany?: targeted_challenges_betsCreateManyTargeted_challengesInputEnvelope
    set?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    disconnect?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    delete?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    connect?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    update?: targeted_challenges_betsUpdateWithWhereUniqueWithoutTargeted_challengesInput | targeted_challenges_betsUpdateWithWhereUniqueWithoutTargeted_challengesInput[]
    updateMany?: targeted_challenges_betsUpdateManyWithWhereWithoutTargeted_challengesInput | targeted_challenges_betsUpdateManyWithWhereWithoutTargeted_challengesInput[]
    deleteMany?: targeted_challenges_betsScalarWhereInput | targeted_challenges_betsScalarWhereInput[]
  }

  export type targeted_challenges_submissionUncheckedUpdateManyWithoutTargeted_challengesNestedInput = {
    create?: XOR<targeted_challenges_submissionCreateWithoutTargeted_challengesInput, targeted_challenges_submissionUncheckedCreateWithoutTargeted_challengesInput> | targeted_challenges_submissionCreateWithoutTargeted_challengesInput[] | targeted_challenges_submissionUncheckedCreateWithoutTargeted_challengesInput[]
    connectOrCreate?: targeted_challenges_submissionCreateOrConnectWithoutTargeted_challengesInput | targeted_challenges_submissionCreateOrConnectWithoutTargeted_challengesInput[]
    upsert?: targeted_challenges_submissionUpsertWithWhereUniqueWithoutTargeted_challengesInput | targeted_challenges_submissionUpsertWithWhereUniqueWithoutTargeted_challengesInput[]
    createMany?: targeted_challenges_submissionCreateManyTargeted_challengesInputEnvelope
    set?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    disconnect?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    delete?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    connect?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    update?: targeted_challenges_submissionUpdateWithWhereUniqueWithoutTargeted_challengesInput | targeted_challenges_submissionUpdateWithWhereUniqueWithoutTargeted_challengesInput[]
    updateMany?: targeted_challenges_submissionUpdateManyWithWhereWithoutTargeted_challengesInput | targeted_challenges_submissionUpdateManyWithWhereWithoutTargeted_challengesInput[]
    deleteMany?: targeted_challenges_submissionScalarWhereInput | targeted_challenges_submissionScalarWhereInput[]
  }

  export type targeted_challenges_votesUncheckedUpdateManyWithoutTargeted_challengesNestedInput = {
    create?: XOR<targeted_challenges_votesCreateWithoutTargeted_challengesInput, targeted_challenges_votesUncheckedCreateWithoutTargeted_challengesInput> | targeted_challenges_votesCreateWithoutTargeted_challengesInput[] | targeted_challenges_votesUncheckedCreateWithoutTargeted_challengesInput[]
    connectOrCreate?: targeted_challenges_votesCreateOrConnectWithoutTargeted_challengesInput | targeted_challenges_votesCreateOrConnectWithoutTargeted_challengesInput[]
    upsert?: targeted_challenges_votesUpsertWithWhereUniqueWithoutTargeted_challengesInput | targeted_challenges_votesUpsertWithWhereUniqueWithoutTargeted_challengesInput[]
    createMany?: targeted_challenges_votesCreateManyTargeted_challengesInputEnvelope
    set?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    disconnect?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    delete?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    connect?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    update?: targeted_challenges_votesUpdateWithWhereUniqueWithoutTargeted_challengesInput | targeted_challenges_votesUpdateWithWhereUniqueWithoutTargeted_challengesInput[]
    updateMany?: targeted_challenges_votesUpdateManyWithWhereWithoutTargeted_challengesInput | targeted_challenges_votesUpdateManyWithWhereWithoutTargeted_challengesInput[]
    deleteMany?: targeted_challenges_votesScalarWhereInput | targeted_challenges_votesScalarWhereInput[]
  }

  export type challengesCreateNestedManyWithoutProfileInput = {
    create?: XOR<challengesCreateWithoutProfileInput, challengesUncheckedCreateWithoutProfileInput> | challengesCreateWithoutProfileInput[] | challengesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutProfileInput | challengesCreateOrConnectWithoutProfileInput[]
    createMany?: challengesCreateManyProfileInputEnvelope
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
  }

  export type open_challenge_submissionsCreateNestedManyWithoutProfileInput = {
    create?: XOR<open_challenge_submissionsCreateWithoutProfileInput, open_challenge_submissionsUncheckedCreateWithoutProfileInput> | open_challenge_submissionsCreateWithoutProfileInput[] | open_challenge_submissionsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: open_challenge_submissionsCreateOrConnectWithoutProfileInput | open_challenge_submissionsCreateOrConnectWithoutProfileInput[]
    createMany?: open_challenge_submissionsCreateManyProfileInputEnvelope
    connect?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
  }

  export type targeted_challenges_betsCreateNestedManyWithoutProfileInput = {
    create?: XOR<targeted_challenges_betsCreateWithoutProfileInput, targeted_challenges_betsUncheckedCreateWithoutProfileInput> | targeted_challenges_betsCreateWithoutProfileInput[] | targeted_challenges_betsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: targeted_challenges_betsCreateOrConnectWithoutProfileInput | targeted_challenges_betsCreateOrConnectWithoutProfileInput[]
    createMany?: targeted_challenges_betsCreateManyProfileInputEnvelope
    connect?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
  }

  export type targeted_challenges_submissionCreateNestedManyWithoutProfileInput = {
    create?: XOR<targeted_challenges_submissionCreateWithoutProfileInput, targeted_challenges_submissionUncheckedCreateWithoutProfileInput> | targeted_challenges_submissionCreateWithoutProfileInput[] | targeted_challenges_submissionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: targeted_challenges_submissionCreateOrConnectWithoutProfileInput | targeted_challenges_submissionCreateOrConnectWithoutProfileInput[]
    createMany?: targeted_challenges_submissionCreateManyProfileInputEnvelope
    connect?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
  }

  export type targeted_challenges_votesCreateNestedManyWithoutProfileInput = {
    create?: XOR<targeted_challenges_votesCreateWithoutProfileInput, targeted_challenges_votesUncheckedCreateWithoutProfileInput> | targeted_challenges_votesCreateWithoutProfileInput[] | targeted_challenges_votesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: targeted_challenges_votesCreateOrConnectWithoutProfileInput | targeted_challenges_votesCreateOrConnectWithoutProfileInput[]
    createMany?: targeted_challenges_votesCreateManyProfileInputEnvelope
    connect?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
  }

  export type challengesUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<challengesCreateWithoutProfileInput, challengesUncheckedCreateWithoutProfileInput> | challengesCreateWithoutProfileInput[] | challengesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: challengesCreateOrConnectWithoutProfileInput | challengesCreateOrConnectWithoutProfileInput[]
    createMany?: challengesCreateManyProfileInputEnvelope
    connect?: challengesWhereUniqueInput | challengesWhereUniqueInput[]
  }

  export type open_challenge_submissionsUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<open_challenge_submissionsCreateWithoutProfileInput, open_challenge_submissionsUncheckedCreateWithoutProfileInput> | open_challenge_submissionsCreateWithoutProfileInput[] | open_challenge_submissionsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: open_challenge_submissionsCreateOrConnectWithoutProfileInput | open_challenge_submissionsCreateOrConnectWithoutProfileInput[]
    createMany?: open_challenge_submissionsCreateManyProfileInputEnvelope
    connect?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
  }

  export type targeted_challenges_betsUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<targeted_challenges_betsCreateWithoutProfileInput, targeted_challenges_betsUncheckedCreateWithoutProfileInput> | targeted_challenges_betsCreateWithoutProfileInput[] | targeted_challenges_betsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: targeted_challenges_betsCreateOrConnectWithoutProfileInput | targeted_challenges_betsCreateOrConnectWithoutProfileInput[]
    createMany?: targeted_challenges_betsCreateManyProfileInputEnvelope
    connect?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
  }

  export type targeted_challenges_submissionUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<targeted_challenges_submissionCreateWithoutProfileInput, targeted_challenges_submissionUncheckedCreateWithoutProfileInput> | targeted_challenges_submissionCreateWithoutProfileInput[] | targeted_challenges_submissionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: targeted_challenges_submissionCreateOrConnectWithoutProfileInput | targeted_challenges_submissionCreateOrConnectWithoutProfileInput[]
    createMany?: targeted_challenges_submissionCreateManyProfileInputEnvelope
    connect?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
  }

  export type targeted_challenges_votesUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<targeted_challenges_votesCreateWithoutProfileInput, targeted_challenges_votesUncheckedCreateWithoutProfileInput> | targeted_challenges_votesCreateWithoutProfileInput[] | targeted_challenges_votesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: targeted_challenges_votesCreateOrConnectWithoutProfileInput | targeted_challenges_votesCreateOrConnectWithoutProfileInput[]
    createMany?: targeted_challenges_votesCreateManyProfileInputEnvelope
    connect?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
  }

  export type Enumgender_typeFieldUpdateOperationsInput = {
    set?: $Enums.gender_type
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

  export type open_challenge_submissionsUpdateManyWithoutProfileNestedInput = {
    create?: XOR<open_challenge_submissionsCreateWithoutProfileInput, open_challenge_submissionsUncheckedCreateWithoutProfileInput> | open_challenge_submissionsCreateWithoutProfileInput[] | open_challenge_submissionsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: open_challenge_submissionsCreateOrConnectWithoutProfileInput | open_challenge_submissionsCreateOrConnectWithoutProfileInput[]
    upsert?: open_challenge_submissionsUpsertWithWhereUniqueWithoutProfileInput | open_challenge_submissionsUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: open_challenge_submissionsCreateManyProfileInputEnvelope
    set?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    disconnect?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    delete?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    connect?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    update?: open_challenge_submissionsUpdateWithWhereUniqueWithoutProfileInput | open_challenge_submissionsUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: open_challenge_submissionsUpdateManyWithWhereWithoutProfileInput | open_challenge_submissionsUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: open_challenge_submissionsScalarWhereInput | open_challenge_submissionsScalarWhereInput[]
  }

  export type targeted_challenges_betsUpdateManyWithoutProfileNestedInput = {
    create?: XOR<targeted_challenges_betsCreateWithoutProfileInput, targeted_challenges_betsUncheckedCreateWithoutProfileInput> | targeted_challenges_betsCreateWithoutProfileInput[] | targeted_challenges_betsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: targeted_challenges_betsCreateOrConnectWithoutProfileInput | targeted_challenges_betsCreateOrConnectWithoutProfileInput[]
    upsert?: targeted_challenges_betsUpsertWithWhereUniqueWithoutProfileInput | targeted_challenges_betsUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: targeted_challenges_betsCreateManyProfileInputEnvelope
    set?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    disconnect?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    delete?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    connect?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    update?: targeted_challenges_betsUpdateWithWhereUniqueWithoutProfileInput | targeted_challenges_betsUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: targeted_challenges_betsUpdateManyWithWhereWithoutProfileInput | targeted_challenges_betsUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: targeted_challenges_betsScalarWhereInput | targeted_challenges_betsScalarWhereInput[]
  }

  export type targeted_challenges_submissionUpdateManyWithoutProfileNestedInput = {
    create?: XOR<targeted_challenges_submissionCreateWithoutProfileInput, targeted_challenges_submissionUncheckedCreateWithoutProfileInput> | targeted_challenges_submissionCreateWithoutProfileInput[] | targeted_challenges_submissionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: targeted_challenges_submissionCreateOrConnectWithoutProfileInput | targeted_challenges_submissionCreateOrConnectWithoutProfileInput[]
    upsert?: targeted_challenges_submissionUpsertWithWhereUniqueWithoutProfileInput | targeted_challenges_submissionUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: targeted_challenges_submissionCreateManyProfileInputEnvelope
    set?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    disconnect?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    delete?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    connect?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    update?: targeted_challenges_submissionUpdateWithWhereUniqueWithoutProfileInput | targeted_challenges_submissionUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: targeted_challenges_submissionUpdateManyWithWhereWithoutProfileInput | targeted_challenges_submissionUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: targeted_challenges_submissionScalarWhereInput | targeted_challenges_submissionScalarWhereInput[]
  }

  export type targeted_challenges_votesUpdateManyWithoutProfileNestedInput = {
    create?: XOR<targeted_challenges_votesCreateWithoutProfileInput, targeted_challenges_votesUncheckedCreateWithoutProfileInput> | targeted_challenges_votesCreateWithoutProfileInput[] | targeted_challenges_votesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: targeted_challenges_votesCreateOrConnectWithoutProfileInput | targeted_challenges_votesCreateOrConnectWithoutProfileInput[]
    upsert?: targeted_challenges_votesUpsertWithWhereUniqueWithoutProfileInput | targeted_challenges_votesUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: targeted_challenges_votesCreateManyProfileInputEnvelope
    set?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    disconnect?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    delete?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    connect?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    update?: targeted_challenges_votesUpdateWithWhereUniqueWithoutProfileInput | targeted_challenges_votesUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: targeted_challenges_votesUpdateManyWithWhereWithoutProfileInput | targeted_challenges_votesUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: targeted_challenges_votesScalarWhereInput | targeted_challenges_votesScalarWhereInput[]
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

  export type open_challenge_submissionsUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<open_challenge_submissionsCreateWithoutProfileInput, open_challenge_submissionsUncheckedCreateWithoutProfileInput> | open_challenge_submissionsCreateWithoutProfileInput[] | open_challenge_submissionsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: open_challenge_submissionsCreateOrConnectWithoutProfileInput | open_challenge_submissionsCreateOrConnectWithoutProfileInput[]
    upsert?: open_challenge_submissionsUpsertWithWhereUniqueWithoutProfileInput | open_challenge_submissionsUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: open_challenge_submissionsCreateManyProfileInputEnvelope
    set?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    disconnect?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    delete?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    connect?: open_challenge_submissionsWhereUniqueInput | open_challenge_submissionsWhereUniqueInput[]
    update?: open_challenge_submissionsUpdateWithWhereUniqueWithoutProfileInput | open_challenge_submissionsUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: open_challenge_submissionsUpdateManyWithWhereWithoutProfileInput | open_challenge_submissionsUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: open_challenge_submissionsScalarWhereInput | open_challenge_submissionsScalarWhereInput[]
  }

  export type targeted_challenges_betsUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<targeted_challenges_betsCreateWithoutProfileInput, targeted_challenges_betsUncheckedCreateWithoutProfileInput> | targeted_challenges_betsCreateWithoutProfileInput[] | targeted_challenges_betsUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: targeted_challenges_betsCreateOrConnectWithoutProfileInput | targeted_challenges_betsCreateOrConnectWithoutProfileInput[]
    upsert?: targeted_challenges_betsUpsertWithWhereUniqueWithoutProfileInput | targeted_challenges_betsUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: targeted_challenges_betsCreateManyProfileInputEnvelope
    set?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    disconnect?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    delete?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    connect?: targeted_challenges_betsWhereUniqueInput | targeted_challenges_betsWhereUniqueInput[]
    update?: targeted_challenges_betsUpdateWithWhereUniqueWithoutProfileInput | targeted_challenges_betsUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: targeted_challenges_betsUpdateManyWithWhereWithoutProfileInput | targeted_challenges_betsUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: targeted_challenges_betsScalarWhereInput | targeted_challenges_betsScalarWhereInput[]
  }

  export type targeted_challenges_submissionUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<targeted_challenges_submissionCreateWithoutProfileInput, targeted_challenges_submissionUncheckedCreateWithoutProfileInput> | targeted_challenges_submissionCreateWithoutProfileInput[] | targeted_challenges_submissionUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: targeted_challenges_submissionCreateOrConnectWithoutProfileInput | targeted_challenges_submissionCreateOrConnectWithoutProfileInput[]
    upsert?: targeted_challenges_submissionUpsertWithWhereUniqueWithoutProfileInput | targeted_challenges_submissionUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: targeted_challenges_submissionCreateManyProfileInputEnvelope
    set?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    disconnect?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    delete?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    connect?: targeted_challenges_submissionWhereUniqueInput | targeted_challenges_submissionWhereUniqueInput[]
    update?: targeted_challenges_submissionUpdateWithWhereUniqueWithoutProfileInput | targeted_challenges_submissionUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: targeted_challenges_submissionUpdateManyWithWhereWithoutProfileInput | targeted_challenges_submissionUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: targeted_challenges_submissionScalarWhereInput | targeted_challenges_submissionScalarWhereInput[]
  }

  export type targeted_challenges_votesUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<targeted_challenges_votesCreateWithoutProfileInput, targeted_challenges_votesUncheckedCreateWithoutProfileInput> | targeted_challenges_votesCreateWithoutProfileInput[] | targeted_challenges_votesUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: targeted_challenges_votesCreateOrConnectWithoutProfileInput | targeted_challenges_votesCreateOrConnectWithoutProfileInput[]
    upsert?: targeted_challenges_votesUpsertWithWhereUniqueWithoutProfileInput | targeted_challenges_votesUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: targeted_challenges_votesCreateManyProfileInputEnvelope
    set?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    disconnect?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    delete?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    connect?: targeted_challenges_votesWhereUniqueInput | targeted_challenges_votesWhereUniqueInput[]
    update?: targeted_challenges_votesUpdateWithWhereUniqueWithoutProfileInput | targeted_challenges_votesUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: targeted_challenges_votesUpdateManyWithWhereWithoutProfileInput | targeted_challenges_votesUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: targeted_challenges_votesScalarWhereInput | targeted_challenges_votesScalarWhereInput[]
  }

  export type open_challengesCreateNestedOneWithoutOpen_challenge_submissionsInput = {
    create?: XOR<open_challengesCreateWithoutOpen_challenge_submissionsInput, open_challengesUncheckedCreateWithoutOpen_challenge_submissionsInput>
    connectOrCreate?: open_challengesCreateOrConnectWithoutOpen_challenge_submissionsInput
    connect?: open_challengesWhereUniqueInput
  }

  export type profileCreateNestedOneWithoutOpen_challenge_submissionsInput = {
    create?: XOR<profileCreateWithoutOpen_challenge_submissionsInput, profileUncheckedCreateWithoutOpen_challenge_submissionsInput>
    connectOrCreate?: profileCreateOrConnectWithoutOpen_challenge_submissionsInput
    connect?: profileWhereUniqueInput
  }

  export type open_challengesUpdateOneRequiredWithoutOpen_challenge_submissionsNestedInput = {
    create?: XOR<open_challengesCreateWithoutOpen_challenge_submissionsInput, open_challengesUncheckedCreateWithoutOpen_challenge_submissionsInput>
    connectOrCreate?: open_challengesCreateOrConnectWithoutOpen_challenge_submissionsInput
    upsert?: open_challengesUpsertWithoutOpen_challenge_submissionsInput
    connect?: open_challengesWhereUniqueInput
    update?: XOR<XOR<open_challengesUpdateToOneWithWhereWithoutOpen_challenge_submissionsInput, open_challengesUpdateWithoutOpen_challenge_submissionsInput>, open_challengesUncheckedUpdateWithoutOpen_challenge_submissionsInput>
  }

  export type profileUpdateOneRequiredWithoutOpen_challenge_submissionsNestedInput = {
    create?: XOR<profileCreateWithoutOpen_challenge_submissionsInput, profileUncheckedCreateWithoutOpen_challenge_submissionsInput>
    connectOrCreate?: profileCreateOrConnectWithoutOpen_challenge_submissionsInput
    upsert?: profileUpsertWithoutOpen_challenge_submissionsInput
    connect?: profileWhereUniqueInput
    update?: XOR<XOR<profileUpdateToOneWithWhereWithoutOpen_challenge_submissionsInput, profileUpdateWithoutOpen_challenge_submissionsInput>, profileUncheckedUpdateWithoutOpen_challenge_submissionsInput>
  }

  export type profileCreateNestedOneWithoutTargeted_challenges_betsInput = {
    create?: XOR<profileCreateWithoutTargeted_challenges_betsInput, profileUncheckedCreateWithoutTargeted_challenges_betsInput>
    connectOrCreate?: profileCreateOrConnectWithoutTargeted_challenges_betsInput
    connect?: profileWhereUniqueInput
  }

  export type targeted_challengesCreateNestedOneWithoutTargeted_challenges_betsInput = {
    create?: XOR<targeted_challengesCreateWithoutTargeted_challenges_betsInput, targeted_challengesUncheckedCreateWithoutTargeted_challenges_betsInput>
    connectOrCreate?: targeted_challengesCreateOrConnectWithoutTargeted_challenges_betsInput
    connect?: targeted_challengesWhereUniqueInput
  }

  export type Enumcast_directionFieldUpdateOperationsInput = {
    set?: $Enums.cast_direction
  }

  export type profileUpdateOneRequiredWithoutTargeted_challenges_betsNestedInput = {
    create?: XOR<profileCreateWithoutTargeted_challenges_betsInput, profileUncheckedCreateWithoutTargeted_challenges_betsInput>
    connectOrCreate?: profileCreateOrConnectWithoutTargeted_challenges_betsInput
    upsert?: profileUpsertWithoutTargeted_challenges_betsInput
    connect?: profileWhereUniqueInput
    update?: XOR<XOR<profileUpdateToOneWithWhereWithoutTargeted_challenges_betsInput, profileUpdateWithoutTargeted_challenges_betsInput>, profileUncheckedUpdateWithoutTargeted_challenges_betsInput>
  }

  export type targeted_challengesUpdateOneRequiredWithoutTargeted_challenges_betsNestedInput = {
    create?: XOR<targeted_challengesCreateWithoutTargeted_challenges_betsInput, targeted_challengesUncheckedCreateWithoutTargeted_challenges_betsInput>
    connectOrCreate?: targeted_challengesCreateOrConnectWithoutTargeted_challenges_betsInput
    upsert?: targeted_challengesUpsertWithoutTargeted_challenges_betsInput
    connect?: targeted_challengesWhereUniqueInput
    update?: XOR<XOR<targeted_challengesUpdateToOneWithWhereWithoutTargeted_challenges_betsInput, targeted_challengesUpdateWithoutTargeted_challenges_betsInput>, targeted_challengesUncheckedUpdateWithoutTargeted_challenges_betsInput>
  }

  export type targeted_challengesCreateNestedOneWithoutTargeted_challenges_submissionInput = {
    create?: XOR<targeted_challengesCreateWithoutTargeted_challenges_submissionInput, targeted_challengesUncheckedCreateWithoutTargeted_challenges_submissionInput>
    connectOrCreate?: targeted_challengesCreateOrConnectWithoutTargeted_challenges_submissionInput
    connect?: targeted_challengesWhereUniqueInput
  }

  export type profileCreateNestedOneWithoutTargeted_challenges_submissionInput = {
    create?: XOR<profileCreateWithoutTargeted_challenges_submissionInput, profileUncheckedCreateWithoutTargeted_challenges_submissionInput>
    connectOrCreate?: profileCreateOrConnectWithoutTargeted_challenges_submissionInput
    connect?: profileWhereUniqueInput
  }

  export type targeted_challengesUpdateOneRequiredWithoutTargeted_challenges_submissionNestedInput = {
    create?: XOR<targeted_challengesCreateWithoutTargeted_challenges_submissionInput, targeted_challengesUncheckedCreateWithoutTargeted_challenges_submissionInput>
    connectOrCreate?: targeted_challengesCreateOrConnectWithoutTargeted_challenges_submissionInput
    upsert?: targeted_challengesUpsertWithoutTargeted_challenges_submissionInput
    connect?: targeted_challengesWhereUniqueInput
    update?: XOR<XOR<targeted_challengesUpdateToOneWithWhereWithoutTargeted_challenges_submissionInput, targeted_challengesUpdateWithoutTargeted_challenges_submissionInput>, targeted_challengesUncheckedUpdateWithoutTargeted_challenges_submissionInput>
  }

  export type profileUpdateOneRequiredWithoutTargeted_challenges_submissionNestedInput = {
    create?: XOR<profileCreateWithoutTargeted_challenges_submissionInput, profileUncheckedCreateWithoutTargeted_challenges_submissionInput>
    connectOrCreate?: profileCreateOrConnectWithoutTargeted_challenges_submissionInput
    upsert?: profileUpsertWithoutTargeted_challenges_submissionInput
    connect?: profileWhereUniqueInput
    update?: XOR<XOR<profileUpdateToOneWithWhereWithoutTargeted_challenges_submissionInput, profileUpdateWithoutTargeted_challenges_submissionInput>, profileUncheckedUpdateWithoutTargeted_challenges_submissionInput>
  }

  export type targeted_challengesCreateNestedOneWithoutTargeted_challenges_votesInput = {
    create?: XOR<targeted_challengesCreateWithoutTargeted_challenges_votesInput, targeted_challengesUncheckedCreateWithoutTargeted_challenges_votesInput>
    connectOrCreate?: targeted_challengesCreateOrConnectWithoutTargeted_challenges_votesInput
    connect?: targeted_challengesWhereUniqueInput
  }

  export type profileCreateNestedOneWithoutTargeted_challenges_votesInput = {
    create?: XOR<profileCreateWithoutTargeted_challenges_votesInput, profileUncheckedCreateWithoutTargeted_challenges_votesInput>
    connectOrCreate?: profileCreateOrConnectWithoutTargeted_challenges_votesInput
    connect?: profileWhereUniqueInput
  }

  export type targeted_challengesUpdateOneRequiredWithoutTargeted_challenges_votesNestedInput = {
    create?: XOR<targeted_challengesCreateWithoutTargeted_challenges_votesInput, targeted_challengesUncheckedCreateWithoutTargeted_challenges_votesInput>
    connectOrCreate?: targeted_challengesCreateOrConnectWithoutTargeted_challenges_votesInput
    upsert?: targeted_challengesUpsertWithoutTargeted_challenges_votesInput
    connect?: targeted_challengesWhereUniqueInput
    update?: XOR<XOR<targeted_challengesUpdateToOneWithWhereWithoutTargeted_challenges_votesInput, targeted_challengesUpdateWithoutTargeted_challenges_votesInput>, targeted_challengesUncheckedUpdateWithoutTargeted_challenges_votesInput>
  }

  export type profileUpdateOneRequiredWithoutTargeted_challenges_votesNestedInput = {
    create?: XOR<profileCreateWithoutTargeted_challenges_votesInput, profileUncheckedCreateWithoutTargeted_challenges_votesInput>
    connectOrCreate?: profileCreateOrConnectWithoutTargeted_challenges_votesInput
    upsert?: profileUpsertWithoutTargeted_challenges_votesInput
    connect?: profileWhereUniqueInput
    update?: XOR<XOR<profileUpdateToOneWithWhereWithoutTargeted_challenges_votesInput, profileUpdateWithoutTargeted_challenges_votesInput>, profileUncheckedUpdateWithoutTargeted_challenges_votesInput>
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

  export type NestedEnumcast_directionFilter<$PrismaModel = never> = {
    equals?: $Enums.cast_direction | Enumcast_directionFieldRefInput<$PrismaModel>
    in?: $Enums.cast_direction[] | ListEnumcast_directionFieldRefInput<$PrismaModel>
    notIn?: $Enums.cast_direction[] | ListEnumcast_directionFieldRefInput<$PrismaModel>
    not?: NestedEnumcast_directionFilter<$PrismaModel> | $Enums.cast_direction
  }

  export type NestedEnumcast_directionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.cast_direction | Enumcast_directionFieldRefInput<$PrismaModel>
    in?: $Enums.cast_direction[] | ListEnumcast_directionFieldRefInput<$PrismaModel>
    notIn?: $Enums.cast_direction[] | ListEnumcast_directionFieldRefInput<$PrismaModel>
    not?: NestedEnumcast_directionWithAggregatesFilter<$PrismaModel> | $Enums.cast_direction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumcast_directionFilter<$PrismaModel>
    _max?: NestedEnumcast_directionFilter<$PrismaModel>
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
    open_challenge_submissions?: open_challenge_submissionsCreateNestedManyWithoutProfileInput
    targeted_challenges_bets?: targeted_challenges_betsCreateNestedManyWithoutProfileInput
    targeted_challenges_submission?: targeted_challenges_submissionCreateNestedManyWithoutProfileInput
    targeted_challenges_votes?: targeted_challenges_votesCreateNestedManyWithoutProfileInput
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
    open_challenge_submissions?: open_challenge_submissionsUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_bets?: targeted_challenges_betsUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileCreateOrConnectWithoutChallengesInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutChallengesInput, profileUncheckedCreateWithoutChallengesInput>
  }

  export type open_challengesCreateWithoutChallengesInput = {
    submissions?: number
    open_challenge_submissions?: open_challenge_submissionsCreateNestedManyWithoutOpen_challengesInput
  }

  export type open_challengesUncheckedCreateWithoutChallengesInput = {
    submissions?: number
    open_challenge_submissions?: open_challenge_submissionsUncheckedCreateNestedManyWithoutOpen_challengesInput
  }

  export type open_challengesCreateOrConnectWithoutChallengesInput = {
    where: open_challengesWhereUniqueInput
    create: XOR<open_challengesCreateWithoutChallengesInput, open_challengesUncheckedCreateWithoutChallengesInput>
  }

  export type targeted_challengesCreateWithoutChallengesInput = {
    specific_target: string
    votes_for?: number
    votes_against?: number
    bettors_for?: number
    bettors_against?: number
    bet_spread_total?: number
    bet_spread_for?: number
    bet_spread_against?: number
    targeted_challenges_bets?: targeted_challenges_betsCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_submission?: targeted_challenges_submissionCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_votes?: targeted_challenges_votesCreateNestedManyWithoutTargeted_challengesInput
  }

  export type targeted_challengesUncheckedCreateWithoutChallengesInput = {
    specific_target: string
    votes_for?: number
    votes_against?: number
    bettors_for?: number
    bettors_against?: number
    bet_spread_total?: number
    bet_spread_for?: number
    bet_spread_against?: number
    targeted_challenges_bets?: targeted_challenges_betsUncheckedCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedCreateNestedManyWithoutTargeted_challengesInput
  }

  export type targeted_challengesCreateOrConnectWithoutChallengesInput = {
    where: targeted_challengesWhereUniqueInput
    create: XOR<targeted_challengesCreateWithoutChallengesInput, targeted_challengesUncheckedCreateWithoutChallengesInput>
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
    open_challenge_submissions?: open_challenge_submissionsUpdateManyWithoutProfileNestedInput
    targeted_challenges_bets?: targeted_challenges_betsUpdateManyWithoutProfileNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUpdateManyWithoutProfileNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUpdateManyWithoutProfileNestedInput
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
    open_challenge_submissions?: open_challenge_submissionsUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_bets?: targeted_challenges_betsUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedUpdateManyWithoutProfileNestedInput
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
    open_challenge_submissions?: open_challenge_submissionsUpdateManyWithoutOpen_challengesNestedInput
  }

  export type open_challengesUncheckedUpdateWithoutChallengesInput = {
    submissions?: IntFieldUpdateOperationsInput | number
    open_challenge_submissions?: open_challenge_submissionsUncheckedUpdateManyWithoutOpen_challengesNestedInput
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
    specific_target?: StringFieldUpdateOperationsInput | string
    votes_for?: IntFieldUpdateOperationsInput | number
    votes_against?: IntFieldUpdateOperationsInput | number
    bettors_for?: IntFieldUpdateOperationsInput | number
    bettors_against?: IntFieldUpdateOperationsInput | number
    bet_spread_total?: IntFieldUpdateOperationsInput | number
    bet_spread_for?: IntFieldUpdateOperationsInput | number
    bet_spread_against?: IntFieldUpdateOperationsInput | number
    targeted_challenges_bets?: targeted_challenges_betsUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUpdateManyWithoutTargeted_challengesNestedInput
  }

  export type targeted_challengesUncheckedUpdateWithoutChallengesInput = {
    specific_target?: StringFieldUpdateOperationsInput | string
    votes_for?: IntFieldUpdateOperationsInput | number
    votes_against?: IntFieldUpdateOperationsInput | number
    bettors_for?: IntFieldUpdateOperationsInput | number
    bettors_against?: IntFieldUpdateOperationsInput | number
    bet_spread_total?: IntFieldUpdateOperationsInput | number
    bet_spread_for?: IntFieldUpdateOperationsInput | number
    bet_spread_against?: IntFieldUpdateOperationsInput | number
    targeted_challenges_bets?: targeted_challenges_betsUncheckedUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedUpdateManyWithoutTargeted_challengesNestedInput
  }

  export type open_challenge_submissionsCreateWithoutOpen_challengesInput = {
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
    profile: profileCreateNestedOneWithoutOpen_challenge_submissionsInput
  }

  export type open_challenge_submissionsUncheckedCreateWithoutOpen_challengesInput = {
    open_submission_id?: number
    user_id: string
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
  }

  export type open_challenge_submissionsCreateOrConnectWithoutOpen_challengesInput = {
    where: open_challenge_submissionsWhereUniqueInput
    create: XOR<open_challenge_submissionsCreateWithoutOpen_challengesInput, open_challenge_submissionsUncheckedCreateWithoutOpen_challengesInput>
  }

  export type open_challenge_submissionsCreateManyOpen_challengesInputEnvelope = {
    data: open_challenge_submissionsCreateManyOpen_challengesInput | open_challenge_submissionsCreateManyOpen_challengesInput[]
    skipDuplicates?: boolean
  }

  export type challengesCreateWithoutOpen_challengesInput = {
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
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
    targeted_challenges?: targeted_challengesUncheckedCreateNestedOneWithoutChallengesInput
  }

  export type challengesCreateOrConnectWithoutOpen_challengesInput = {
    where: challengesWhereUniqueInput
    create: XOR<challengesCreateWithoutOpen_challengesInput, challengesUncheckedCreateWithoutOpen_challengesInput>
  }

  export type open_challenge_submissionsUpsertWithWhereUniqueWithoutOpen_challengesInput = {
    where: open_challenge_submissionsWhereUniqueInput
    update: XOR<open_challenge_submissionsUpdateWithoutOpen_challengesInput, open_challenge_submissionsUncheckedUpdateWithoutOpen_challengesInput>
    create: XOR<open_challenge_submissionsCreateWithoutOpen_challengesInput, open_challenge_submissionsUncheckedCreateWithoutOpen_challengesInput>
  }

  export type open_challenge_submissionsUpdateWithWhereUniqueWithoutOpen_challengesInput = {
    where: open_challenge_submissionsWhereUniqueInput
    data: XOR<open_challenge_submissionsUpdateWithoutOpen_challengesInput, open_challenge_submissionsUncheckedUpdateWithoutOpen_challengesInput>
  }

  export type open_challenge_submissionsUpdateManyWithWhereWithoutOpen_challengesInput = {
    where: open_challenge_submissionsScalarWhereInput
    data: XOR<open_challenge_submissionsUpdateManyMutationInput, open_challenge_submissionsUncheckedUpdateManyWithoutOpen_challengesInput>
  }

  export type open_challenge_submissionsScalarWhereInput = {
    AND?: open_challenge_submissionsScalarWhereInput | open_challenge_submissionsScalarWhereInput[]
    OR?: open_challenge_submissionsScalarWhereInput[]
    NOT?: open_challenge_submissionsScalarWhereInput | open_challenge_submissionsScalarWhereInput[]
    open_submission_id?: IntFilter<"open_challenge_submissions"> | number
    challenge_id?: IntFilter<"open_challenge_submissions"> | number
    c_target?: Enumc_target_typeFilter<"open_challenge_submissions"> | $Enums.c_target_type
    user_id?: StringFilter<"open_challenge_submissions"> | string
    media_url?: StringNullableFilter<"open_challenge_submissions"> | string | null
    caption?: StringNullableFilter<"open_challenge_submissions"> | string | null
    time_submitted?: DateTimeFilter<"open_challenge_submissions"> | Date | string
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
    targeted_challenges?: targeted_challengesUncheckedUpdateOneWithoutChallengesNestedInput
  }

  export type challengesCreateWithoutTargeted_challengesInput = {
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
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
    open_challenges?: open_challengesUncheckedCreateNestedOneWithoutChallengesInput
  }

  export type challengesCreateOrConnectWithoutTargeted_challengesInput = {
    where: challengesWhereUniqueInput
    create: XOR<challengesCreateWithoutTargeted_challengesInput, challengesUncheckedCreateWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_betsCreateWithoutTargeted_challengesInput = {
    bet_direction: $Enums.cast_direction
    bet_magnitude: number
    profile: profileCreateNestedOneWithoutTargeted_challenges_betsInput
  }

  export type targeted_challenges_betsUncheckedCreateWithoutTargeted_challengesInput = {
    bet_id?: number
    bet_direction: $Enums.cast_direction
    bet_magnitude: number
    bettor_id: string
  }

  export type targeted_challenges_betsCreateOrConnectWithoutTargeted_challengesInput = {
    where: targeted_challenges_betsWhereUniqueInput
    create: XOR<targeted_challenges_betsCreateWithoutTargeted_challengesInput, targeted_challenges_betsUncheckedCreateWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_betsCreateManyTargeted_challengesInputEnvelope = {
    data: targeted_challenges_betsCreateManyTargeted_challengesInput | targeted_challenges_betsCreateManyTargeted_challengesInput[]
    skipDuplicates?: boolean
  }

  export type targeted_challenges_submissionCreateWithoutTargeted_challengesInput = {
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
    profile: profileCreateNestedOneWithoutTargeted_challenges_submissionInput
  }

  export type targeted_challenges_submissionUncheckedCreateWithoutTargeted_challengesInput = {
    submission_id?: number
    submitter_id: string
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
  }

  export type targeted_challenges_submissionCreateOrConnectWithoutTargeted_challengesInput = {
    where: targeted_challenges_submissionWhereUniqueInput
    create: XOR<targeted_challenges_submissionCreateWithoutTargeted_challengesInput, targeted_challenges_submissionUncheckedCreateWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_submissionCreateManyTargeted_challengesInputEnvelope = {
    data: targeted_challenges_submissionCreateManyTargeted_challengesInput | targeted_challenges_submissionCreateManyTargeted_challengesInput[]
    skipDuplicates?: boolean
  }

  export type targeted_challenges_votesCreateWithoutTargeted_challengesInput = {
    vote_direction: $Enums.cast_direction
    profile: profileCreateNestedOneWithoutTargeted_challenges_votesInput
  }

  export type targeted_challenges_votesUncheckedCreateWithoutTargeted_challengesInput = {
    vote_id?: number
    vote_direction: $Enums.cast_direction
    voter_id: string
  }

  export type targeted_challenges_votesCreateOrConnectWithoutTargeted_challengesInput = {
    where: targeted_challenges_votesWhereUniqueInput
    create: XOR<targeted_challenges_votesCreateWithoutTargeted_challengesInput, targeted_challenges_votesUncheckedCreateWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_votesCreateManyTargeted_challengesInputEnvelope = {
    data: targeted_challenges_votesCreateManyTargeted_challengesInput | targeted_challenges_votesCreateManyTargeted_challengesInput[]
    skipDuplicates?: boolean
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
    open_challenges?: open_challengesUncheckedUpdateOneWithoutChallengesNestedInput
  }

  export type targeted_challenges_betsUpsertWithWhereUniqueWithoutTargeted_challengesInput = {
    where: targeted_challenges_betsWhereUniqueInput
    update: XOR<targeted_challenges_betsUpdateWithoutTargeted_challengesInput, targeted_challenges_betsUncheckedUpdateWithoutTargeted_challengesInput>
    create: XOR<targeted_challenges_betsCreateWithoutTargeted_challengesInput, targeted_challenges_betsUncheckedCreateWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_betsUpdateWithWhereUniqueWithoutTargeted_challengesInput = {
    where: targeted_challenges_betsWhereUniqueInput
    data: XOR<targeted_challenges_betsUpdateWithoutTargeted_challengesInput, targeted_challenges_betsUncheckedUpdateWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_betsUpdateManyWithWhereWithoutTargeted_challengesInput = {
    where: targeted_challenges_betsScalarWhereInput
    data: XOR<targeted_challenges_betsUpdateManyMutationInput, targeted_challenges_betsUncheckedUpdateManyWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_betsScalarWhereInput = {
    AND?: targeted_challenges_betsScalarWhereInput | targeted_challenges_betsScalarWhereInput[]
    OR?: targeted_challenges_betsScalarWhereInput[]
    NOT?: targeted_challenges_betsScalarWhereInput | targeted_challenges_betsScalarWhereInput[]
    bet_id?: IntFilter<"targeted_challenges_bets"> | number
    challenge_id?: IntFilter<"targeted_challenges_bets"> | number
    c_target?: Enumc_target_typeFilter<"targeted_challenges_bets"> | $Enums.c_target_type
    bet_direction?: Enumcast_directionFilter<"targeted_challenges_bets"> | $Enums.cast_direction
    bet_magnitude?: IntFilter<"targeted_challenges_bets"> | number
    bettor_id?: StringFilter<"targeted_challenges_bets"> | string
  }

  export type targeted_challenges_submissionUpsertWithWhereUniqueWithoutTargeted_challengesInput = {
    where: targeted_challenges_submissionWhereUniqueInput
    update: XOR<targeted_challenges_submissionUpdateWithoutTargeted_challengesInput, targeted_challenges_submissionUncheckedUpdateWithoutTargeted_challengesInput>
    create: XOR<targeted_challenges_submissionCreateWithoutTargeted_challengesInput, targeted_challenges_submissionUncheckedCreateWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_submissionUpdateWithWhereUniqueWithoutTargeted_challengesInput = {
    where: targeted_challenges_submissionWhereUniqueInput
    data: XOR<targeted_challenges_submissionUpdateWithoutTargeted_challengesInput, targeted_challenges_submissionUncheckedUpdateWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_submissionUpdateManyWithWhereWithoutTargeted_challengesInput = {
    where: targeted_challenges_submissionScalarWhereInput
    data: XOR<targeted_challenges_submissionUpdateManyMutationInput, targeted_challenges_submissionUncheckedUpdateManyWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_submissionScalarWhereInput = {
    AND?: targeted_challenges_submissionScalarWhereInput | targeted_challenges_submissionScalarWhereInput[]
    OR?: targeted_challenges_submissionScalarWhereInput[]
    NOT?: targeted_challenges_submissionScalarWhereInput | targeted_challenges_submissionScalarWhereInput[]
    submission_id?: IntFilter<"targeted_challenges_submission"> | number
    challenge_id?: IntFilter<"targeted_challenges_submission"> | number
    c_target?: Enumc_target_typeFilter<"targeted_challenges_submission"> | $Enums.c_target_type
    submitter_id?: StringFilter<"targeted_challenges_submission"> | string
    media_url?: StringNullableFilter<"targeted_challenges_submission"> | string | null
    caption?: StringNullableFilter<"targeted_challenges_submission"> | string | null
    time_submitted?: DateTimeFilter<"targeted_challenges_submission"> | Date | string
  }

  export type targeted_challenges_votesUpsertWithWhereUniqueWithoutTargeted_challengesInput = {
    where: targeted_challenges_votesWhereUniqueInput
    update: XOR<targeted_challenges_votesUpdateWithoutTargeted_challengesInput, targeted_challenges_votesUncheckedUpdateWithoutTargeted_challengesInput>
    create: XOR<targeted_challenges_votesCreateWithoutTargeted_challengesInput, targeted_challenges_votesUncheckedCreateWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_votesUpdateWithWhereUniqueWithoutTargeted_challengesInput = {
    where: targeted_challenges_votesWhereUniqueInput
    data: XOR<targeted_challenges_votesUpdateWithoutTargeted_challengesInput, targeted_challenges_votesUncheckedUpdateWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_votesUpdateManyWithWhereWithoutTargeted_challengesInput = {
    where: targeted_challenges_votesScalarWhereInput
    data: XOR<targeted_challenges_votesUpdateManyMutationInput, targeted_challenges_votesUncheckedUpdateManyWithoutTargeted_challengesInput>
  }

  export type targeted_challenges_votesScalarWhereInput = {
    AND?: targeted_challenges_votesScalarWhereInput | targeted_challenges_votesScalarWhereInput[]
    OR?: targeted_challenges_votesScalarWhereInput[]
    NOT?: targeted_challenges_votesScalarWhereInput | targeted_challenges_votesScalarWhereInput[]
    vote_id?: IntFilter<"targeted_challenges_votes"> | number
    challenge_id?: IntFilter<"targeted_challenges_votes"> | number
    c_target?: Enumc_target_typeFilter<"targeted_challenges_votes"> | $Enums.c_target_type
    vote_direction?: Enumcast_directionFilter<"targeted_challenges_votes"> | $Enums.cast_direction
    voter_id?: StringFilter<"targeted_challenges_votes"> | string
  }

  export type challengesCreateWithoutProfileInput = {
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
    open_challenges?: open_challengesCreateNestedOneWithoutChallengesInput
    targeted_challenges?: targeted_challengesCreateNestedOneWithoutChallengesInput
  }

  export type challengesUncheckedCreateWithoutProfileInput = {
    id?: number
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
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

  export type open_challenge_submissionsCreateWithoutProfileInput = {
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
    open_challenges: open_challengesCreateNestedOneWithoutOpen_challenge_submissionsInput
  }

  export type open_challenge_submissionsUncheckedCreateWithoutProfileInput = {
    open_submission_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
  }

  export type open_challenge_submissionsCreateOrConnectWithoutProfileInput = {
    where: open_challenge_submissionsWhereUniqueInput
    create: XOR<open_challenge_submissionsCreateWithoutProfileInput, open_challenge_submissionsUncheckedCreateWithoutProfileInput>
  }

  export type open_challenge_submissionsCreateManyProfileInputEnvelope = {
    data: open_challenge_submissionsCreateManyProfileInput | open_challenge_submissionsCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type targeted_challenges_betsCreateWithoutProfileInput = {
    bet_direction: $Enums.cast_direction
    bet_magnitude: number
    targeted_challenges: targeted_challengesCreateNestedOneWithoutTargeted_challenges_betsInput
  }

  export type targeted_challenges_betsUncheckedCreateWithoutProfileInput = {
    bet_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    bet_direction: $Enums.cast_direction
    bet_magnitude: number
  }

  export type targeted_challenges_betsCreateOrConnectWithoutProfileInput = {
    where: targeted_challenges_betsWhereUniqueInput
    create: XOR<targeted_challenges_betsCreateWithoutProfileInput, targeted_challenges_betsUncheckedCreateWithoutProfileInput>
  }

  export type targeted_challenges_betsCreateManyProfileInputEnvelope = {
    data: targeted_challenges_betsCreateManyProfileInput | targeted_challenges_betsCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type targeted_challenges_submissionCreateWithoutProfileInput = {
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
    targeted_challenges: targeted_challengesCreateNestedOneWithoutTargeted_challenges_submissionInput
  }

  export type targeted_challenges_submissionUncheckedCreateWithoutProfileInput = {
    submission_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
  }

  export type targeted_challenges_submissionCreateOrConnectWithoutProfileInput = {
    where: targeted_challenges_submissionWhereUniqueInput
    create: XOR<targeted_challenges_submissionCreateWithoutProfileInput, targeted_challenges_submissionUncheckedCreateWithoutProfileInput>
  }

  export type targeted_challenges_submissionCreateManyProfileInputEnvelope = {
    data: targeted_challenges_submissionCreateManyProfileInput | targeted_challenges_submissionCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type targeted_challenges_votesCreateWithoutProfileInput = {
    vote_direction: $Enums.cast_direction
    targeted_challenges: targeted_challengesCreateNestedOneWithoutTargeted_challenges_votesInput
  }

  export type targeted_challenges_votesUncheckedCreateWithoutProfileInput = {
    vote_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    vote_direction: $Enums.cast_direction
  }

  export type targeted_challenges_votesCreateOrConnectWithoutProfileInput = {
    where: targeted_challenges_votesWhereUniqueInput
    create: XOR<targeted_challenges_votesCreateWithoutProfileInput, targeted_challenges_votesUncheckedCreateWithoutProfileInput>
  }

  export type targeted_challenges_votesCreateManyProfileInputEnvelope = {
    data: targeted_challenges_votesCreateManyProfileInput | targeted_challenges_votesCreateManyProfileInput[]
    skipDuplicates?: boolean
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

  export type open_challenge_submissionsUpsertWithWhereUniqueWithoutProfileInput = {
    where: open_challenge_submissionsWhereUniqueInput
    update: XOR<open_challenge_submissionsUpdateWithoutProfileInput, open_challenge_submissionsUncheckedUpdateWithoutProfileInput>
    create: XOR<open_challenge_submissionsCreateWithoutProfileInput, open_challenge_submissionsUncheckedCreateWithoutProfileInput>
  }

  export type open_challenge_submissionsUpdateWithWhereUniqueWithoutProfileInput = {
    where: open_challenge_submissionsWhereUniqueInput
    data: XOR<open_challenge_submissionsUpdateWithoutProfileInput, open_challenge_submissionsUncheckedUpdateWithoutProfileInput>
  }

  export type open_challenge_submissionsUpdateManyWithWhereWithoutProfileInput = {
    where: open_challenge_submissionsScalarWhereInput
    data: XOR<open_challenge_submissionsUpdateManyMutationInput, open_challenge_submissionsUncheckedUpdateManyWithoutProfileInput>
  }

  export type targeted_challenges_betsUpsertWithWhereUniqueWithoutProfileInput = {
    where: targeted_challenges_betsWhereUniqueInput
    update: XOR<targeted_challenges_betsUpdateWithoutProfileInput, targeted_challenges_betsUncheckedUpdateWithoutProfileInput>
    create: XOR<targeted_challenges_betsCreateWithoutProfileInput, targeted_challenges_betsUncheckedCreateWithoutProfileInput>
  }

  export type targeted_challenges_betsUpdateWithWhereUniqueWithoutProfileInput = {
    where: targeted_challenges_betsWhereUniqueInput
    data: XOR<targeted_challenges_betsUpdateWithoutProfileInput, targeted_challenges_betsUncheckedUpdateWithoutProfileInput>
  }

  export type targeted_challenges_betsUpdateManyWithWhereWithoutProfileInput = {
    where: targeted_challenges_betsScalarWhereInput
    data: XOR<targeted_challenges_betsUpdateManyMutationInput, targeted_challenges_betsUncheckedUpdateManyWithoutProfileInput>
  }

  export type targeted_challenges_submissionUpsertWithWhereUniqueWithoutProfileInput = {
    where: targeted_challenges_submissionWhereUniqueInput
    update: XOR<targeted_challenges_submissionUpdateWithoutProfileInput, targeted_challenges_submissionUncheckedUpdateWithoutProfileInput>
    create: XOR<targeted_challenges_submissionCreateWithoutProfileInput, targeted_challenges_submissionUncheckedCreateWithoutProfileInput>
  }

  export type targeted_challenges_submissionUpdateWithWhereUniqueWithoutProfileInput = {
    where: targeted_challenges_submissionWhereUniqueInput
    data: XOR<targeted_challenges_submissionUpdateWithoutProfileInput, targeted_challenges_submissionUncheckedUpdateWithoutProfileInput>
  }

  export type targeted_challenges_submissionUpdateManyWithWhereWithoutProfileInput = {
    where: targeted_challenges_submissionScalarWhereInput
    data: XOR<targeted_challenges_submissionUpdateManyMutationInput, targeted_challenges_submissionUncheckedUpdateManyWithoutProfileInput>
  }

  export type targeted_challenges_votesUpsertWithWhereUniqueWithoutProfileInput = {
    where: targeted_challenges_votesWhereUniqueInput
    update: XOR<targeted_challenges_votesUpdateWithoutProfileInput, targeted_challenges_votesUncheckedUpdateWithoutProfileInput>
    create: XOR<targeted_challenges_votesCreateWithoutProfileInput, targeted_challenges_votesUncheckedCreateWithoutProfileInput>
  }

  export type targeted_challenges_votesUpdateWithWhereUniqueWithoutProfileInput = {
    where: targeted_challenges_votesWhereUniqueInput
    data: XOR<targeted_challenges_votesUpdateWithoutProfileInput, targeted_challenges_votesUncheckedUpdateWithoutProfileInput>
  }

  export type targeted_challenges_votesUpdateManyWithWhereWithoutProfileInput = {
    where: targeted_challenges_votesScalarWhereInput
    data: XOR<targeted_challenges_votesUpdateManyMutationInput, targeted_challenges_votesUncheckedUpdateManyWithoutProfileInput>
  }

  export type open_challengesCreateWithoutOpen_challenge_submissionsInput = {
    submissions?: number
    challenges: challengesCreateNestedOneWithoutOpen_challengesInput
  }

  export type open_challengesUncheckedCreateWithoutOpen_challenge_submissionsInput = {
    challenge_id: number
    c_target?: $Enums.c_target_type
    submissions?: number
  }

  export type open_challengesCreateOrConnectWithoutOpen_challenge_submissionsInput = {
    where: open_challengesWhereUniqueInput
    create: XOR<open_challengesCreateWithoutOpen_challenge_submissionsInput, open_challengesUncheckedCreateWithoutOpen_challenge_submissionsInput>
  }

  export type profileCreateWithoutOpen_challenge_submissionsInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenges?: challengesCreateNestedManyWithoutProfileInput
    targeted_challenges_bets?: targeted_challenges_betsCreateNestedManyWithoutProfileInput
    targeted_challenges_submission?: targeted_challenges_submissionCreateNestedManyWithoutProfileInput
    targeted_challenges_votes?: targeted_challenges_votesCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateWithoutOpen_challenge_submissionsInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenges?: challengesUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_bets?: targeted_challenges_betsUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileCreateOrConnectWithoutOpen_challenge_submissionsInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutOpen_challenge_submissionsInput, profileUncheckedCreateWithoutOpen_challenge_submissionsInput>
  }

  export type open_challengesUpsertWithoutOpen_challenge_submissionsInput = {
    update: XOR<open_challengesUpdateWithoutOpen_challenge_submissionsInput, open_challengesUncheckedUpdateWithoutOpen_challenge_submissionsInput>
    create: XOR<open_challengesCreateWithoutOpen_challenge_submissionsInput, open_challengesUncheckedCreateWithoutOpen_challenge_submissionsInput>
    where?: open_challengesWhereInput
  }

  export type open_challengesUpdateToOneWithWhereWithoutOpen_challenge_submissionsInput = {
    where?: open_challengesWhereInput
    data: XOR<open_challengesUpdateWithoutOpen_challenge_submissionsInput, open_challengesUncheckedUpdateWithoutOpen_challenge_submissionsInput>
  }

  export type open_challengesUpdateWithoutOpen_challenge_submissionsInput = {
    submissions?: IntFieldUpdateOperationsInput | number
    challenges?: challengesUpdateOneRequiredWithoutOpen_challengesNestedInput
  }

  export type open_challengesUncheckedUpdateWithoutOpen_challenge_submissionsInput = {
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    submissions?: IntFieldUpdateOperationsInput | number
  }

  export type profileUpsertWithoutOpen_challenge_submissionsInput = {
    update: XOR<profileUpdateWithoutOpen_challenge_submissionsInput, profileUncheckedUpdateWithoutOpen_challenge_submissionsInput>
    create: XOR<profileCreateWithoutOpen_challenge_submissionsInput, profileUncheckedCreateWithoutOpen_challenge_submissionsInput>
    where?: profileWhereInput
  }

  export type profileUpdateToOneWithWhereWithoutOpen_challenge_submissionsInput = {
    where?: profileWhereInput
    data: XOR<profileUpdateWithoutOpen_challenge_submissionsInput, profileUncheckedUpdateWithoutOpen_challenge_submissionsInput>
  }

  export type profileUpdateWithoutOpen_challenge_submissionsInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenges?: challengesUpdateManyWithoutProfileNestedInput
    targeted_challenges_bets?: targeted_challenges_betsUpdateManyWithoutProfileNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUpdateManyWithoutProfileNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateWithoutOpen_challenge_submissionsInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenges?: challengesUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_bets?: targeted_challenges_betsUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type profileCreateWithoutTargeted_challenges_betsInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenges?: challengesCreateNestedManyWithoutProfileInput
    open_challenge_submissions?: open_challenge_submissionsCreateNestedManyWithoutProfileInput
    targeted_challenges_submission?: targeted_challenges_submissionCreateNestedManyWithoutProfileInput
    targeted_challenges_votes?: targeted_challenges_votesCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateWithoutTargeted_challenges_betsInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenges?: challengesUncheckedCreateNestedManyWithoutProfileInput
    open_challenge_submissions?: open_challenge_submissionsUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileCreateOrConnectWithoutTargeted_challenges_betsInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutTargeted_challenges_betsInput, profileUncheckedCreateWithoutTargeted_challenges_betsInput>
  }

  export type targeted_challengesCreateWithoutTargeted_challenges_betsInput = {
    specific_target: string
    votes_for?: number
    votes_against?: number
    bettors_for?: number
    bettors_against?: number
    bet_spread_total?: number
    bet_spread_for?: number
    bet_spread_against?: number
    challenges: challengesCreateNestedOneWithoutTargeted_challengesInput
    targeted_challenges_submission?: targeted_challenges_submissionCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_votes?: targeted_challenges_votesCreateNestedManyWithoutTargeted_challengesInput
  }

  export type targeted_challengesUncheckedCreateWithoutTargeted_challenges_betsInput = {
    challenge_id: number
    c_target?: $Enums.c_target_type
    specific_target: string
    votes_for?: number
    votes_against?: number
    bettors_for?: number
    bettors_against?: number
    bet_spread_total?: number
    bet_spread_for?: number
    bet_spread_against?: number
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedCreateNestedManyWithoutTargeted_challengesInput
  }

  export type targeted_challengesCreateOrConnectWithoutTargeted_challenges_betsInput = {
    where: targeted_challengesWhereUniqueInput
    create: XOR<targeted_challengesCreateWithoutTargeted_challenges_betsInput, targeted_challengesUncheckedCreateWithoutTargeted_challenges_betsInput>
  }

  export type profileUpsertWithoutTargeted_challenges_betsInput = {
    update: XOR<profileUpdateWithoutTargeted_challenges_betsInput, profileUncheckedUpdateWithoutTargeted_challenges_betsInput>
    create: XOR<profileCreateWithoutTargeted_challenges_betsInput, profileUncheckedCreateWithoutTargeted_challenges_betsInput>
    where?: profileWhereInput
  }

  export type profileUpdateToOneWithWhereWithoutTargeted_challenges_betsInput = {
    where?: profileWhereInput
    data: XOR<profileUpdateWithoutTargeted_challenges_betsInput, profileUncheckedUpdateWithoutTargeted_challenges_betsInput>
  }

  export type profileUpdateWithoutTargeted_challenges_betsInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenges?: challengesUpdateManyWithoutProfileNestedInput
    open_challenge_submissions?: open_challenge_submissionsUpdateManyWithoutProfileNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUpdateManyWithoutProfileNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateWithoutTargeted_challenges_betsInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenges?: challengesUncheckedUpdateManyWithoutProfileNestedInput
    open_challenge_submissions?: open_challenge_submissionsUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type targeted_challengesUpsertWithoutTargeted_challenges_betsInput = {
    update: XOR<targeted_challengesUpdateWithoutTargeted_challenges_betsInput, targeted_challengesUncheckedUpdateWithoutTargeted_challenges_betsInput>
    create: XOR<targeted_challengesCreateWithoutTargeted_challenges_betsInput, targeted_challengesUncheckedCreateWithoutTargeted_challenges_betsInput>
    where?: targeted_challengesWhereInput
  }

  export type targeted_challengesUpdateToOneWithWhereWithoutTargeted_challenges_betsInput = {
    where?: targeted_challengesWhereInput
    data: XOR<targeted_challengesUpdateWithoutTargeted_challenges_betsInput, targeted_challengesUncheckedUpdateWithoutTargeted_challenges_betsInput>
  }

  export type targeted_challengesUpdateWithoutTargeted_challenges_betsInput = {
    specific_target?: StringFieldUpdateOperationsInput | string
    votes_for?: IntFieldUpdateOperationsInput | number
    votes_against?: IntFieldUpdateOperationsInput | number
    bettors_for?: IntFieldUpdateOperationsInput | number
    bettors_against?: IntFieldUpdateOperationsInput | number
    bet_spread_total?: IntFieldUpdateOperationsInput | number
    bet_spread_for?: IntFieldUpdateOperationsInput | number
    bet_spread_against?: IntFieldUpdateOperationsInput | number
    challenges?: challengesUpdateOneRequiredWithoutTargeted_challengesNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUpdateManyWithoutTargeted_challengesNestedInput
  }

  export type targeted_challengesUncheckedUpdateWithoutTargeted_challenges_betsInput = {
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    specific_target?: StringFieldUpdateOperationsInput | string
    votes_for?: IntFieldUpdateOperationsInput | number
    votes_against?: IntFieldUpdateOperationsInput | number
    bettors_for?: IntFieldUpdateOperationsInput | number
    bettors_against?: IntFieldUpdateOperationsInput | number
    bet_spread_total?: IntFieldUpdateOperationsInput | number
    bet_spread_for?: IntFieldUpdateOperationsInput | number
    bet_spread_against?: IntFieldUpdateOperationsInput | number
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedUpdateManyWithoutTargeted_challengesNestedInput
  }

  export type targeted_challengesCreateWithoutTargeted_challenges_submissionInput = {
    specific_target: string
    votes_for?: number
    votes_against?: number
    bettors_for?: number
    bettors_against?: number
    bet_spread_total?: number
    bet_spread_for?: number
    bet_spread_against?: number
    challenges: challengesCreateNestedOneWithoutTargeted_challengesInput
    targeted_challenges_bets?: targeted_challenges_betsCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_votes?: targeted_challenges_votesCreateNestedManyWithoutTargeted_challengesInput
  }

  export type targeted_challengesUncheckedCreateWithoutTargeted_challenges_submissionInput = {
    challenge_id: number
    c_target?: $Enums.c_target_type
    specific_target: string
    votes_for?: number
    votes_against?: number
    bettors_for?: number
    bettors_against?: number
    bet_spread_total?: number
    bet_spread_for?: number
    bet_spread_against?: number
    targeted_challenges_bets?: targeted_challenges_betsUncheckedCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedCreateNestedManyWithoutTargeted_challengesInput
  }

  export type targeted_challengesCreateOrConnectWithoutTargeted_challenges_submissionInput = {
    where: targeted_challengesWhereUniqueInput
    create: XOR<targeted_challengesCreateWithoutTargeted_challenges_submissionInput, targeted_challengesUncheckedCreateWithoutTargeted_challenges_submissionInput>
  }

  export type profileCreateWithoutTargeted_challenges_submissionInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenges?: challengesCreateNestedManyWithoutProfileInput
    open_challenge_submissions?: open_challenge_submissionsCreateNestedManyWithoutProfileInput
    targeted_challenges_bets?: targeted_challenges_betsCreateNestedManyWithoutProfileInput
    targeted_challenges_votes?: targeted_challenges_votesCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateWithoutTargeted_challenges_submissionInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenges?: challengesUncheckedCreateNestedManyWithoutProfileInput
    open_challenge_submissions?: open_challenge_submissionsUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_bets?: targeted_challenges_betsUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileCreateOrConnectWithoutTargeted_challenges_submissionInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutTargeted_challenges_submissionInput, profileUncheckedCreateWithoutTargeted_challenges_submissionInput>
  }

  export type targeted_challengesUpsertWithoutTargeted_challenges_submissionInput = {
    update: XOR<targeted_challengesUpdateWithoutTargeted_challenges_submissionInput, targeted_challengesUncheckedUpdateWithoutTargeted_challenges_submissionInput>
    create: XOR<targeted_challengesCreateWithoutTargeted_challenges_submissionInput, targeted_challengesUncheckedCreateWithoutTargeted_challenges_submissionInput>
    where?: targeted_challengesWhereInput
  }

  export type targeted_challengesUpdateToOneWithWhereWithoutTargeted_challenges_submissionInput = {
    where?: targeted_challengesWhereInput
    data: XOR<targeted_challengesUpdateWithoutTargeted_challenges_submissionInput, targeted_challengesUncheckedUpdateWithoutTargeted_challenges_submissionInput>
  }

  export type targeted_challengesUpdateWithoutTargeted_challenges_submissionInput = {
    specific_target?: StringFieldUpdateOperationsInput | string
    votes_for?: IntFieldUpdateOperationsInput | number
    votes_against?: IntFieldUpdateOperationsInput | number
    bettors_for?: IntFieldUpdateOperationsInput | number
    bettors_against?: IntFieldUpdateOperationsInput | number
    bet_spread_total?: IntFieldUpdateOperationsInput | number
    bet_spread_for?: IntFieldUpdateOperationsInput | number
    bet_spread_against?: IntFieldUpdateOperationsInput | number
    challenges?: challengesUpdateOneRequiredWithoutTargeted_challengesNestedInput
    targeted_challenges_bets?: targeted_challenges_betsUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUpdateManyWithoutTargeted_challengesNestedInput
  }

  export type targeted_challengesUncheckedUpdateWithoutTargeted_challenges_submissionInput = {
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    specific_target?: StringFieldUpdateOperationsInput | string
    votes_for?: IntFieldUpdateOperationsInput | number
    votes_against?: IntFieldUpdateOperationsInput | number
    bettors_for?: IntFieldUpdateOperationsInput | number
    bettors_against?: IntFieldUpdateOperationsInput | number
    bet_spread_total?: IntFieldUpdateOperationsInput | number
    bet_spread_for?: IntFieldUpdateOperationsInput | number
    bet_spread_against?: IntFieldUpdateOperationsInput | number
    targeted_challenges_bets?: targeted_challenges_betsUncheckedUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedUpdateManyWithoutTargeted_challengesNestedInput
  }

  export type profileUpsertWithoutTargeted_challenges_submissionInput = {
    update: XOR<profileUpdateWithoutTargeted_challenges_submissionInput, profileUncheckedUpdateWithoutTargeted_challenges_submissionInput>
    create: XOR<profileCreateWithoutTargeted_challenges_submissionInput, profileUncheckedCreateWithoutTargeted_challenges_submissionInput>
    where?: profileWhereInput
  }

  export type profileUpdateToOneWithWhereWithoutTargeted_challenges_submissionInput = {
    where?: profileWhereInput
    data: XOR<profileUpdateWithoutTargeted_challenges_submissionInput, profileUncheckedUpdateWithoutTargeted_challenges_submissionInput>
  }

  export type profileUpdateWithoutTargeted_challenges_submissionInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenges?: challengesUpdateManyWithoutProfileNestedInput
    open_challenge_submissions?: open_challenge_submissionsUpdateManyWithoutProfileNestedInput
    targeted_challenges_bets?: targeted_challenges_betsUpdateManyWithoutProfileNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateWithoutTargeted_challenges_submissionInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenges?: challengesUncheckedUpdateManyWithoutProfileNestedInput
    open_challenge_submissions?: open_challenge_submissionsUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_bets?: targeted_challenges_betsUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_votes?: targeted_challenges_votesUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type targeted_challengesCreateWithoutTargeted_challenges_votesInput = {
    specific_target: string
    votes_for?: number
    votes_against?: number
    bettors_for?: number
    bettors_against?: number
    bet_spread_total?: number
    bet_spread_for?: number
    bet_spread_against?: number
    challenges: challengesCreateNestedOneWithoutTargeted_challengesInput
    targeted_challenges_bets?: targeted_challenges_betsCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_submission?: targeted_challenges_submissionCreateNestedManyWithoutTargeted_challengesInput
  }

  export type targeted_challengesUncheckedCreateWithoutTargeted_challenges_votesInput = {
    challenge_id: number
    c_target?: $Enums.c_target_type
    specific_target: string
    votes_for?: number
    votes_against?: number
    bettors_for?: number
    bettors_against?: number
    bet_spread_total?: number
    bet_spread_for?: number
    bet_spread_against?: number
    targeted_challenges_bets?: targeted_challenges_betsUncheckedCreateNestedManyWithoutTargeted_challengesInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedCreateNestedManyWithoutTargeted_challengesInput
  }

  export type targeted_challengesCreateOrConnectWithoutTargeted_challenges_votesInput = {
    where: targeted_challengesWhereUniqueInput
    create: XOR<targeted_challengesCreateWithoutTargeted_challenges_votesInput, targeted_challengesUncheckedCreateWithoutTargeted_challenges_votesInput>
  }

  export type profileCreateWithoutTargeted_challenges_votesInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenges?: challengesCreateNestedManyWithoutProfileInput
    open_challenge_submissions?: open_challenge_submissionsCreateNestedManyWithoutProfileInput
    targeted_challenges_bets?: targeted_challenges_betsCreateNestedManyWithoutProfileInput
    targeted_challenges_submission?: targeted_challenges_submissionCreateNestedManyWithoutProfileInput
  }

  export type profileUncheckedCreateWithoutTargeted_challenges_votesInput = {
    profile_id: string
    first_name: string
    last_name: string
    coins?: number
    phone_number: string
    email: string
    date_of_birth: Date | string
    gender: $Enums.gender_type
    challenges?: challengesUncheckedCreateNestedManyWithoutProfileInput
    open_challenge_submissions?: open_challenge_submissionsUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_bets?: targeted_challenges_betsUncheckedCreateNestedManyWithoutProfileInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedCreateNestedManyWithoutProfileInput
  }

  export type profileCreateOrConnectWithoutTargeted_challenges_votesInput = {
    where: profileWhereUniqueInput
    create: XOR<profileCreateWithoutTargeted_challenges_votesInput, profileUncheckedCreateWithoutTargeted_challenges_votesInput>
  }

  export type targeted_challengesUpsertWithoutTargeted_challenges_votesInput = {
    update: XOR<targeted_challengesUpdateWithoutTargeted_challenges_votesInput, targeted_challengesUncheckedUpdateWithoutTargeted_challenges_votesInput>
    create: XOR<targeted_challengesCreateWithoutTargeted_challenges_votesInput, targeted_challengesUncheckedCreateWithoutTargeted_challenges_votesInput>
    where?: targeted_challengesWhereInput
  }

  export type targeted_challengesUpdateToOneWithWhereWithoutTargeted_challenges_votesInput = {
    where?: targeted_challengesWhereInput
    data: XOR<targeted_challengesUpdateWithoutTargeted_challenges_votesInput, targeted_challengesUncheckedUpdateWithoutTargeted_challenges_votesInput>
  }

  export type targeted_challengesUpdateWithoutTargeted_challenges_votesInput = {
    specific_target?: StringFieldUpdateOperationsInput | string
    votes_for?: IntFieldUpdateOperationsInput | number
    votes_against?: IntFieldUpdateOperationsInput | number
    bettors_for?: IntFieldUpdateOperationsInput | number
    bettors_against?: IntFieldUpdateOperationsInput | number
    bet_spread_total?: IntFieldUpdateOperationsInput | number
    bet_spread_for?: IntFieldUpdateOperationsInput | number
    bet_spread_against?: IntFieldUpdateOperationsInput | number
    challenges?: challengesUpdateOneRequiredWithoutTargeted_challengesNestedInput
    targeted_challenges_bets?: targeted_challenges_betsUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUpdateManyWithoutTargeted_challengesNestedInput
  }

  export type targeted_challengesUncheckedUpdateWithoutTargeted_challenges_votesInput = {
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    specific_target?: StringFieldUpdateOperationsInput | string
    votes_for?: IntFieldUpdateOperationsInput | number
    votes_against?: IntFieldUpdateOperationsInput | number
    bettors_for?: IntFieldUpdateOperationsInput | number
    bettors_against?: IntFieldUpdateOperationsInput | number
    bet_spread_total?: IntFieldUpdateOperationsInput | number
    bet_spread_for?: IntFieldUpdateOperationsInput | number
    bet_spread_against?: IntFieldUpdateOperationsInput | number
    targeted_challenges_bets?: targeted_challenges_betsUncheckedUpdateManyWithoutTargeted_challengesNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedUpdateManyWithoutTargeted_challengesNestedInput
  }

  export type profileUpsertWithoutTargeted_challenges_votesInput = {
    update: XOR<profileUpdateWithoutTargeted_challenges_votesInput, profileUncheckedUpdateWithoutTargeted_challenges_votesInput>
    create: XOR<profileCreateWithoutTargeted_challenges_votesInput, profileUncheckedCreateWithoutTargeted_challenges_votesInput>
    where?: profileWhereInput
  }

  export type profileUpdateToOneWithWhereWithoutTargeted_challenges_votesInput = {
    where?: profileWhereInput
    data: XOR<profileUpdateWithoutTargeted_challenges_votesInput, profileUncheckedUpdateWithoutTargeted_challenges_votesInput>
  }

  export type profileUpdateWithoutTargeted_challenges_votesInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenges?: challengesUpdateManyWithoutProfileNestedInput
    open_challenge_submissions?: open_challenge_submissionsUpdateManyWithoutProfileNestedInput
    targeted_challenges_bets?: targeted_challenges_betsUpdateManyWithoutProfileNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUpdateManyWithoutProfileNestedInput
  }

  export type profileUncheckedUpdateWithoutTargeted_challenges_votesInput = {
    profile_id?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    coins?: IntFieldUpdateOperationsInput | number
    phone_number?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    date_of_birth?: DateTimeFieldUpdateOperationsInput | Date | string
    gender?: Enumgender_typeFieldUpdateOperationsInput | $Enums.gender_type
    challenges?: challengesUncheckedUpdateManyWithoutProfileNestedInput
    open_challenge_submissions?: open_challenge_submissionsUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_bets?: targeted_challenges_betsUncheckedUpdateManyWithoutProfileNestedInput
    targeted_challenges_submission?: targeted_challenges_submissionUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type open_challenge_submissionsCreateManyOpen_challengesInput = {
    open_submission_id?: number
    user_id: string
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
  }

  export type open_challenge_submissionsUpdateWithoutOpen_challengesInput = {
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: profileUpdateOneRequiredWithoutOpen_challenge_submissionsNestedInput
  }

  export type open_challenge_submissionsUncheckedUpdateWithoutOpen_challengesInput = {
    open_submission_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type open_challenge_submissionsUncheckedUpdateManyWithoutOpen_challengesInput = {
    open_submission_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type targeted_challenges_betsCreateManyTargeted_challengesInput = {
    bet_id?: number
    bet_direction: $Enums.cast_direction
    bet_magnitude: number
    bettor_id: string
  }

  export type targeted_challenges_submissionCreateManyTargeted_challengesInput = {
    submission_id?: number
    submitter_id: string
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
  }

  export type targeted_challenges_votesCreateManyTargeted_challengesInput = {
    vote_id?: number
    vote_direction: $Enums.cast_direction
    voter_id: string
  }

  export type targeted_challenges_betsUpdateWithoutTargeted_challengesInput = {
    bet_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    bet_magnitude?: IntFieldUpdateOperationsInput | number
    profile?: profileUpdateOneRequiredWithoutTargeted_challenges_betsNestedInput
  }

  export type targeted_challenges_betsUncheckedUpdateWithoutTargeted_challengesInput = {
    bet_id?: IntFieldUpdateOperationsInput | number
    bet_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    bet_magnitude?: IntFieldUpdateOperationsInput | number
    bettor_id?: StringFieldUpdateOperationsInput | string
  }

  export type targeted_challenges_betsUncheckedUpdateManyWithoutTargeted_challengesInput = {
    bet_id?: IntFieldUpdateOperationsInput | number
    bet_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    bet_magnitude?: IntFieldUpdateOperationsInput | number
    bettor_id?: StringFieldUpdateOperationsInput | string
  }

  export type targeted_challenges_submissionUpdateWithoutTargeted_challengesInput = {
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: profileUpdateOneRequiredWithoutTargeted_challenges_submissionNestedInput
  }

  export type targeted_challenges_submissionUncheckedUpdateWithoutTargeted_challengesInput = {
    submission_id?: IntFieldUpdateOperationsInput | number
    submitter_id?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type targeted_challenges_submissionUncheckedUpdateManyWithoutTargeted_challengesInput = {
    submission_id?: IntFieldUpdateOperationsInput | number
    submitter_id?: StringFieldUpdateOperationsInput | string
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type targeted_challenges_votesUpdateWithoutTargeted_challengesInput = {
    vote_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    profile?: profileUpdateOneRequiredWithoutTargeted_challenges_votesNestedInput
  }

  export type targeted_challenges_votesUncheckedUpdateWithoutTargeted_challengesInput = {
    vote_id?: IntFieldUpdateOperationsInput | number
    vote_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    voter_id?: StringFieldUpdateOperationsInput | string
  }

  export type targeted_challenges_votesUncheckedUpdateManyWithoutTargeted_challengesInput = {
    vote_id?: IntFieldUpdateOperationsInput | number
    vote_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    voter_id?: StringFieldUpdateOperationsInput | string
  }

  export type challengesCreateManyProfileInput = {
    id?: number
    c_target: $Enums.c_target_type
    c_description: string
    title: string
    time_created?: Date | string
  }

  export type open_challenge_submissionsCreateManyProfileInput = {
    open_submission_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
  }

  export type targeted_challenges_betsCreateManyProfileInput = {
    bet_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    bet_direction: $Enums.cast_direction
    bet_magnitude: number
  }

  export type targeted_challenges_submissionCreateManyProfileInput = {
    submission_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    media_url?: string | null
    caption?: string | null
    time_submitted?: Date | string
  }

  export type targeted_challenges_votesCreateManyProfileInput = {
    vote_id?: number
    challenge_id: number
    c_target?: $Enums.c_target_type
    vote_direction: $Enums.cast_direction
  }

  export type challengesUpdateWithoutProfileInput = {
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
    open_challenges?: open_challengesUpdateOneWithoutChallengesNestedInput
    targeted_challenges?: targeted_challengesUpdateOneWithoutChallengesNestedInput
  }

  export type challengesUncheckedUpdateWithoutProfileInput = {
    id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    c_description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    time_created?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type open_challenge_submissionsUpdateWithoutProfileInput = {
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
    open_challenges?: open_challengesUpdateOneRequiredWithoutOpen_challenge_submissionsNestedInput
  }

  export type open_challenge_submissionsUncheckedUpdateWithoutProfileInput = {
    open_submission_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type open_challenge_submissionsUncheckedUpdateManyWithoutProfileInput = {
    open_submission_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type targeted_challenges_betsUpdateWithoutProfileInput = {
    bet_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    bet_magnitude?: IntFieldUpdateOperationsInput | number
    targeted_challenges?: targeted_challengesUpdateOneRequiredWithoutTargeted_challenges_betsNestedInput
  }

  export type targeted_challenges_betsUncheckedUpdateWithoutProfileInput = {
    bet_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    bet_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    bet_magnitude?: IntFieldUpdateOperationsInput | number
  }

  export type targeted_challenges_betsUncheckedUpdateManyWithoutProfileInput = {
    bet_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    bet_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    bet_magnitude?: IntFieldUpdateOperationsInput | number
  }

  export type targeted_challenges_submissionUpdateWithoutProfileInput = {
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
    targeted_challenges?: targeted_challengesUpdateOneRequiredWithoutTargeted_challenges_submissionNestedInput
  }

  export type targeted_challenges_submissionUncheckedUpdateWithoutProfileInput = {
    submission_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type targeted_challenges_submissionUncheckedUpdateManyWithoutProfileInput = {
    submission_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    media_url?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    time_submitted?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type targeted_challenges_votesUpdateWithoutProfileInput = {
    vote_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
    targeted_challenges?: targeted_challengesUpdateOneRequiredWithoutTargeted_challenges_votesNestedInput
  }

  export type targeted_challenges_votesUncheckedUpdateWithoutProfileInput = {
    vote_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    vote_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
  }

  export type targeted_challenges_votesUncheckedUpdateManyWithoutProfileInput = {
    vote_id?: IntFieldUpdateOperationsInput | number
    challenge_id?: IntFieldUpdateOperationsInput | number
    c_target?: Enumc_target_typeFieldUpdateOperationsInput | $Enums.c_target_type
    vote_direction?: Enumcast_directionFieldUpdateOperationsInput | $Enums.cast_direction
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