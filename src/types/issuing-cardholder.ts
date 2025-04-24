import {
  External$IssuingCardholderAddress,
  IssuingCardholderAddress,
  Schemas$IssuingCardholderAddress,
} from "./issuing-cardholder-address";
import {
  External$IssuingCardholderAuthorizationControls,
  IssuingCardholderAuthorizationControls,
  Schemas$IssuingCardholderAuthorizationControls,
} from "./issuing-cardholder-authorization-controls";
import {
  External$IssuingCardholderCompany,
  IssuingCardholderCompany,
  Schemas$IssuingCardholderCompany,
} from "./issuing-cardholder-company";
import {
  External$IssuingCardholderIndividual,
  IssuingCardholderIndividual,
  Schemas$IssuingCardholderIndividual,
} from "./issuing-cardholder-individual";
import {
  External$IssuingCardholderMetadata,
  IssuingCardholderMetadata,
  Schemas$IssuingCardholderMetadata,
} from "./issuing-cardholder-metadata";
import {
  External$IssuingCardholderRequirements,
  IssuingCardholderRequirements,
  Schemas$IssuingCardholderRequirements,
} from "./issuing-cardholder-requirements";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * An Issuing `Cardholder` object represents an individual or business entity who is [issued](https://stripe.com/docs/issuing) cards.
 *
 * Related guide: [How to create a cardholder](https://stripe.com/docs/issuing/cards/virtual/issue-cards#create-cardholder)
 */
export type IssuingCardholder = {
  billing: IssuingCardholderAddress;
  company?: IssuingCardholderCompany | undefined;
  /**
   * Time at which the object was created. Measured in seconds since the Unix epoch.
   */
  created: number;
  /**
   * The cardholder's email address.
   */
  email?: string | null | undefined;
  /**
   * Unique identifier for the object.
   */
  id: string;
  individual?: IssuingCardholderIndividual | undefined;
  /**
   * Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode.
   */
  livemode: boolean;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format.
   */
  metadata: IssuingCardholderMetadata;
  /**
   * The cardholder's name. This will be printed on cards issued to them.
   */
  name: string;
  /**
   * String representing the object's type. Objects of the same type share the same value.
   */
  object: "issuing.cardholder";
  /**
   * The cardholder's phone number. This is required for all cardholders who will be creating EU cards. See the [3D Secure documentation](https://stripe.com/docs/issuing/3d-secure#when-is-3d-secure-applied) for more details.
   */
  phoneNumber?: string | null | undefined;
  /**
   * The cardholder’s preferred locales (languages), ordered by preference. Locales can be `de`, `en`, `es`, `fr`, or `it`.
   *  This changes the language of the [3D Secure flow](https://stripe.com/docs/issuing/3d-secure) and one-time password messages sent to the cardholder.
   */
  preferredLocales?: ("de" | "en" | "es" | "fr" | "it")[] | null | undefined;
  requirements: IssuingCardholderRequirements;
  spendingControls?: IssuingCardholderAuthorizationControls | undefined;
  /**
   * Specifies whether to permit authorizations on this cardholder's cards.
   */
  status: "active" | "blocked" | "inactive";
  /**
   * One of `individual` or `company`. See [Choose a cardholder type](https://stripe.com/docs/issuing/other/choose-cardholder) for more details.
   */
  type: "company" | "individual";
};

/**
 * @internal
 * IssuingCardholder without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardholder = {
  billing: External$IssuingCardholderAddress;
  company?: External$IssuingCardholderCompany | undefined;
  created: number;
  email?: string | null | undefined;
  id: string;
  individual?: External$IssuingCardholderIndividual | undefined;
  livemode: boolean;
  metadata: External$IssuingCardholderMetadata;
  name: string;
  object: "issuing.cardholder";
  phone_number?: string | null | undefined;
  preferred_locales?: ("de" | "en" | "es" | "fr" | "it")[] | null | undefined;
  requirements: External$IssuingCardholderRequirements;
  spending_controls?:
    | External$IssuingCardholderAuthorizationControls
    | undefined;
  status: "active" | "blocked" | "inactive";
  type: "company" | "individual";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardholder
 */
const SchemaIn$IssuingCardholder: z.ZodType<
  IssuingCardholder, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing: Schemas$IssuingCardholderAddress.in,
    company: Schemas$IssuingCardholderCompany.in.optional(),
    created: z.number().int(),
    email: z.string().nullable().optional(),
    id: z.string(),
    individual: z.lazy(() => Schemas$IssuingCardholderIndividual.in.optional()),
    livemode: z.boolean(),
    metadata: Schemas$IssuingCardholderMetadata.in,
    name: z.string(),
    object: z.enum(["issuing.cardholder"]),
    phone_number: z.string().nullable().optional(),
    preferred_locales: z
      .array(z.enum(["de", "en", "es", "fr", "it"]))
      .nullable()
      .optional(),
    requirements: Schemas$IssuingCardholderRequirements.in,
    spending_controls:
      Schemas$IssuingCardholderAuthorizationControls.in.optional(),
    status: z.enum(["active", "blocked", "inactive"]),
    type: z.enum(["company", "individual"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billing: "billing",
      company: "company",
      created: "created",
      email: "email",
      id: "id",
      individual: "individual",
      livemode: "livemode",
      metadata: "metadata",
      name: "name",
      object: "object",
      phone_number: "phoneNumber",
      preferred_locales: "preferredLocales",
      requirements: "requirements",
      spending_controls: "spendingControls",
      status: "status",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardholder
 */
const SchemaOut$IssuingCardholder: z.ZodType<
  External$IssuingCardholder, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardholder // the object to be transformed
> = z
  .object({
    billing: Schemas$IssuingCardholderAddress.out,
    company: Schemas$IssuingCardholderCompany.out.optional(),
    created: z.number().int(),
    email: z.string().nullable().optional(),
    id: z.string(),
    individual: z.lazy(() =>
      Schemas$IssuingCardholderIndividual.out.optional(),
    ),
    livemode: z.boolean(),
    metadata: Schemas$IssuingCardholderMetadata.out,
    name: z.string(),
    object: z.enum(["issuing.cardholder"]),
    phoneNumber: z.string().nullable().optional(),
    preferredLocales: z
      .array(z.enum(["de", "en", "es", "fr", "it"]))
      .nullable()
      .optional(),
    requirements: Schemas$IssuingCardholderRequirements.out,
    spendingControls:
      Schemas$IssuingCardholderAuthorizationControls.out.optional(),
    status: z.enum(["active", "blocked", "inactive"]),
    type: z.enum(["company", "individual"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billing: "billing",
      company: "company",
      created: "created",
      email: "email",
      id: "id",
      individual: "individual",
      livemode: "livemode",
      metadata: "metadata",
      name: "name",
      object: "object",
      phoneNumber: "phone_number",
      preferredLocales: "preferred_locales",
      requirements: "requirements",
      spendingControls: "spending_controls",
      status: "status",
      type: "type",
    });
  });

export const Schemas$IssuingCardholder = {
  in: SchemaIn$IssuingCardholder,
  out: SchemaOut$IssuingCardholder,
};
