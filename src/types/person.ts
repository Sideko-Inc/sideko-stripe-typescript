import { Address, External$Address, Schemas$Address } from "./address";
import {
  External$LegalEntityDob,
  LegalEntityDob,
  Schemas$LegalEntityDob,
} from "./legal-entity-dob";
import {
  External$LegalEntityJapanAddress,
  LegalEntityJapanAddress,
  Schemas$LegalEntityJapanAddress,
} from "./legal-entity-japan-address";
import {
  External$LegalEntityPersonVerification,
  LegalEntityPersonVerification,
  Schemas$LegalEntityPersonVerification,
} from "./legal-entity-person-verification";
import {
  External$PersonAdditionalTosAcceptances,
  PersonAdditionalTosAcceptances,
  Schemas$PersonAdditionalTosAcceptances,
} from "./person-additional-tos-acceptances";
import {
  External$PersonFutureRequirements,
  PersonFutureRequirements,
  Schemas$PersonFutureRequirements,
} from "./person-future-requirements";
import {
  External$PersonMetadata,
  PersonMetadata,
  Schemas$PersonMetadata,
} from "./person-metadata";
import {
  External$PersonRelationship,
  PersonRelationship,
  Schemas$PersonRelationship,
} from "./person-relationship";
import {
  External$PersonRequirements,
  PersonRequirements,
  Schemas$PersonRequirements,
} from "./person-requirements";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * This is an object representing a person associated with a Stripe account.
 *
 * A platform can only access a subset of data in a person for an account where [account.controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`, which includes Standard and Express accounts, after creating an Account Link or Account Session to start Connect onboarding.
 *
 * See the [Standard onboarding](/connect/standard-accounts) or [Express onboarding](/connect/express-accounts) documentation for information about prefilling information and account onboarding steps. Learn more about [handling identity verification with the API](/connect/handling-api-verification#person-information).
 */
export type Person = {
  /**
   * The account the person is associated with.
   */
  account: string;
  additionalTosAcceptances?: PersonAdditionalTosAcceptances | undefined;
  address?: Address | undefined;
  addressKana?: LegalEntityJapanAddress | undefined;
  addressKanji?: LegalEntityJapanAddress | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  dob?: LegalEntityDob | undefined;
  /**
   * The person's email address. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  email?: string | null | undefined;
  /**
   * The person's first name. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  firstName?: string | null | undefined;
  /**
   * The Kana variation of the person's first name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  firstNameKana?: string | null | undefined;
  /**
   * The Kanji variation of the person's first name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  firstNameKanji?: string | null | undefined;
  /**
   * A list of alternate names or aliases that the person is known by. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  fullNameAliases?: string[] | undefined;
  futureRequirements?: PersonFutureRequirements | undefined;
  /**
   * The person's gender.
   */
  gender?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  /**
   * Whether the person's `id_number` was provided. True if either the full ID number was provided or if only the required part of the ID number was provided (ex. last four of an individual's SSN for the US indicated by `ssn_last_4_provided`).
   */
  idNumberProvided?: boolean | undefined;
  /**
   * Whether the person's `id_number_secondary` was provided.
   */
  idNumberSecondaryProvided?: boolean | undefined;
  /**
   * The person's last name. Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  lastName?: string | null | undefined;
  /**
   * The Kana variation of the person's last name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  lastNameKana?: string | null | undefined;
  /**
   * The Kanji variation of the person's last name (Japan only). Also available for accounts where [controller.requirement_collection](/api/accounts/object#account_object-controller-requirement_collection) is `stripe`.
   */
  lastNameKanji?: string | null | undefined;
  /**
   * The person's maiden name.
   */
  maidenName?: string | null | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata?: PersonMetadata | undefined;
  /**
   * The country where the person is a national.
   */
  nationality?: string | null | undefined;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "person";
  /**
   * The person's phone number.
   */
  phone?: string | null | undefined;
  /**
   * Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction.
   */
  politicalExposure?: ("existing" | "none") | undefined;
  registeredAddress?: Address | undefined;
  relationship?: PersonRelationship | undefined;
  requirements?: PersonRequirements | undefined;
  /**
   * Whether the last four digits of the person's Social Security number have been provided (U.S. only).
   */
  ssnLast4Provided?: boolean | undefined;
  verification?: LegalEntityPersonVerification | undefined;
};

/**
 * @internal
 * Person without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$Person = {
  account: string;
  additional_tos_acceptances?:
    | External$PersonAdditionalTosAcceptances
    | undefined;
  address?: External$Address | undefined;
  address_kana?: External$LegalEntityJapanAddress | undefined;
  address_kanji?: External$LegalEntityJapanAddress | undefined;
  created: number;
  dob?: External$LegalEntityDob | undefined;
  email?: string | null | undefined;
  first_name?: string | null | undefined;
  first_name_kana?: string | null | undefined;
  first_name_kanji?: string | null | undefined;
  full_name_aliases?: string[] | undefined;
  future_requirements?: External$PersonFutureRequirements | undefined;
  gender?: string | null | undefined;
  id: string;
  id_number_provided?: boolean | undefined;
  id_number_secondary_provided?: boolean | undefined;
  last_name?: string | null | undefined;
  last_name_kana?: string | null | undefined;
  last_name_kanji?: string | null | undefined;
  maiden_name?: string | null | undefined;
  metadata?: External$PersonMetadata | undefined;
  nationality?: string | null | undefined;
  object: "person";
  phone?: string | null | undefined;
  political_exposure?: ("existing" | "none") | undefined;
  registered_address?: External$Address | undefined;
  relationship?: External$PersonRelationship | undefined;
  requirements?: External$PersonRequirements | undefined;
  ssn_last_4_provided?: boolean | undefined;
  verification?: External$LegalEntityPersonVerification | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object Person
 */
const SchemaIn$Person: z.ZodType<
  Person, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    account: z.string(),
    additional_tos_acceptances:
      Schemas$PersonAdditionalTosAcceptances.in.optional(),
    address: Schemas$Address.in.optional(),
    address_kana: Schemas$LegalEntityJapanAddress.in.optional(),
    address_kanji: Schemas$LegalEntityJapanAddress.in.optional(),
    created: z.number().int(),
    dob: Schemas$LegalEntityDob.in.optional(),
    email: z.string().nullable().optional(),
    first_name: z.string().nullable().optional(),
    first_name_kana: z.string().nullable().optional(),
    first_name_kanji: z.string().nullable().optional(),
    full_name_aliases: z.array(z.string()).optional(),
    future_requirements: Schemas$PersonFutureRequirements.in.optional(),
    gender: z.string().nullable().optional(),
    id: z.string(),
    id_number_provided: z.boolean().optional(),
    id_number_secondary_provided: z.boolean().optional(),
    last_name: z.string().nullable().optional(),
    last_name_kana: z.string().nullable().optional(),
    last_name_kanji: z.string().nullable().optional(),
    maiden_name: z.string().nullable().optional(),
    metadata: Schemas$PersonMetadata.in.optional(),
    nationality: z.string().nullable().optional(),
    object: z.enum(["person"]),
    phone: z.string().nullable().optional(),
    political_exposure: z.enum(["existing", "none"]).optional(),
    registered_address: Schemas$Address.in.optional(),
    relationship: Schemas$PersonRelationship.in.optional(),
    requirements: Schemas$PersonRequirements.in.optional(),
    ssn_last_4_provided: z.boolean().optional(),
    verification: z.lazy(() =>
      Schemas$LegalEntityPersonVerification.in.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      additional_tos_acceptances: "additionalTosAcceptances",
      address: "address",
      address_kana: "addressKana",
      address_kanji: "addressKanji",
      created: "created",
      dob: "dob",
      email: "email",
      first_name: "firstName",
      first_name_kana: "firstNameKana",
      first_name_kanji: "firstNameKanji",
      full_name_aliases: "fullNameAliases",
      future_requirements: "futureRequirements",
      gender: "gender",
      id: "id",
      id_number_provided: "idNumberProvided",
      id_number_secondary_provided: "idNumberSecondaryProvided",
      last_name: "lastName",
      last_name_kana: "lastNameKana",
      last_name_kanji: "lastNameKanji",
      maiden_name: "maidenName",
      metadata: "metadata",
      nationality: "nationality",
      object: "object",
      phone: "phone",
      political_exposure: "politicalExposure",
      registered_address: "registeredAddress",
      relationship: "relationship",
      requirements: "requirements",
      ssn_last_4_provided: "ssnLast4Provided",
      verification: "verification",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$Person
 */
const SchemaOut$Person: z.ZodType<
  External$Person, // output type of this zod object
  z.ZodTypeDef,
  Person // the object to be transformed
> = z
  .object({
    account: z.string(),
    additionalTosAcceptances:
      Schemas$PersonAdditionalTosAcceptances.out.optional(),
    address: Schemas$Address.out.optional(),
    addressKana: Schemas$LegalEntityJapanAddress.out.optional(),
    addressKanji: Schemas$LegalEntityJapanAddress.out.optional(),
    created: z.number().int(),
    dob: Schemas$LegalEntityDob.out.optional(),
    email: z.string().nullable().optional(),
    firstName: z.string().nullable().optional(),
    firstNameKana: z.string().nullable().optional(),
    firstNameKanji: z.string().nullable().optional(),
    fullNameAliases: z.array(z.string()).optional(),
    futureRequirements: Schemas$PersonFutureRequirements.out.optional(),
    gender: z.string().nullable().optional(),
    id: z.string(),
    idNumberProvided: z.boolean().optional(),
    idNumberSecondaryProvided: z.boolean().optional(),
    lastName: z.string().nullable().optional(),
    lastNameKana: z.string().nullable().optional(),
    lastNameKanji: z.string().nullable().optional(),
    maidenName: z.string().nullable().optional(),
    metadata: Schemas$PersonMetadata.out.optional(),
    nationality: z.string().nullable().optional(),
    object: z.enum(["person"]),
    phone: z.string().nullable().optional(),
    politicalExposure: z.enum(["existing", "none"]).optional(),
    registeredAddress: Schemas$Address.out.optional(),
    relationship: Schemas$PersonRelationship.out.optional(),
    requirements: Schemas$PersonRequirements.out.optional(),
    ssnLast4Provided: z.boolean().optional(),
    verification: z.lazy(() =>
      Schemas$LegalEntityPersonVerification.out.optional(),
    ),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      account: "account",
      additionalTosAcceptances: "additional_tos_acceptances",
      address: "address",
      addressKana: "address_kana",
      addressKanji: "address_kanji",
      created: "created",
      dob: "dob",
      email: "email",
      firstName: "first_name",
      firstNameKana: "first_name_kana",
      firstNameKanji: "first_name_kanji",
      fullNameAliases: "full_name_aliases",
      futureRequirements: "future_requirements",
      gender: "gender",
      id: "id",
      idNumberProvided: "id_number_provided",
      idNumberSecondaryProvided: "id_number_secondary_provided",
      lastName: "last_name",
      lastNameKana: "last_name_kana",
      lastNameKanji: "last_name_kanji",
      maidenName: "maiden_name",
      metadata: "metadata",
      nationality: "nationality",
      object: "object",
      phone: "phone",
      politicalExposure: "political_exposure",
      registeredAddress: "registered_address",
      relationship: "relationship",
      requirements: "requirements",
      ssnLast4Provided: "ssn_last_4_provided",
      verification: "verification",
    });
  });

export const Schemas$Person = {
  in: SchemaIn$Person,
  out: SchemaOut$Person,
};
