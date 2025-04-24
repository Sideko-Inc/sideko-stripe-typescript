import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$IssuingCardholderCreateBodyBilling,
  IssuingCardholderCreateBodyBilling,
  Schemas$IssuingCardholderCreateBodyBilling,
} from "@sideko-inc/stripe/types/issuing-cardholder-create-body-billing";
import {
  External$IssuingCardholderCreateBodyCompany,
  IssuingCardholderCreateBodyCompany,
  Schemas$IssuingCardholderCreateBodyCompany,
} from "@sideko-inc/stripe/types/issuing-cardholder-create-body-company";
import {
  External$IssuingCardholderCreateBodyIndividual,
  IssuingCardholderCreateBodyIndividual,
  Schemas$IssuingCardholderCreateBodyIndividual,
} from "@sideko-inc/stripe/types/issuing-cardholder-create-body-individual";
import {
  External$IssuingCardholderCreateBodyMetadata,
  IssuingCardholderCreateBodyMetadata,
  Schemas$IssuingCardholderCreateBodyMetadata,
} from "@sideko-inc/stripe/types/issuing-cardholder-create-body-metadata";
import {
  External$IssuingCardholderCreateBodySpendingControls,
  IssuingCardholderCreateBodySpendingControls,
  Schemas$IssuingCardholderCreateBodySpendingControls,
} from "@sideko-inc/stripe/types/issuing-cardholder-create-body-spending-controls";
import {
  External$IssuingCardholderListCreatedObj0,
  IssuingCardholderListCreatedObj0,
  Schemas$IssuingCardholderListCreatedObj0,
} from "@sideko-inc/stripe/types/issuing-cardholder-list-created-obj0";
import {
  External$IssuingCardholderUpdateBody,
  IssuingCardholderUpdateBody,
  Schemas$IssuingCardholderUpdateBody,
} from "@sideko-inc/stripe/types/issuing-cardholder-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return cardholders that were created during the given date interval.
   */
  created?: (IssuingCardholderListCreatedObj0 | number) | undefined;
  /**
   * Only return cardholders that have the given email address.
   */
  email?: string | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  /**
   * Only return cardholders that have the given phone number.
   */
  phoneNumber?: string | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return cardholders that have the given status. One of `active`, `inactive`, or `blocked`.
   */
  status?: ("active" | "blocked" | "inactive") | undefined;
  /**
   * Only return cardholders that have the given type. One of `individual` or `company`.
   */
  type?: ("company" | "individual") | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  created?: (External$IssuingCardholderListCreatedObj0 | number) | undefined;
  email?: string | undefined;
  ending_before?: string | undefined;
  expand?: string[] | undefined;
  limit?: number | undefined;
  phone_number?: string | undefined;
  starting_after?: string | undefined;
  status?: ("active" | "blocked" | "inactive") | undefined;
  type?: ("company" | "individual") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object ListRequest
 */
const SchemaIn$ListRequest: z.ZodType<
  ListRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    created: z
      .union([Schemas$IssuingCardholderListCreatedObj0.in, z.number().int()])
      .optional(),
    email: z.string().optional(),
    ending_before: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    phone_number: z.string().optional(),
    starting_after: z.string().optional(),
    status: z.enum(["active", "blocked", "inactive"]).optional(),
    type: z.enum(["company", "individual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      email: "email",
      ending_before: "endingBefore",
      expand: "expand",
      limit: "limit",
      phone_number: "phoneNumber",
      starting_after: "startingAfter",
      status: "status",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$ListRequest
 */
const SchemaOut$ListRequest: z.ZodType<
  External$ListRequest, // output type of this zod object
  z.ZodTypeDef,
  ListRequest // the object to be transformed
> = z
  .object({
    created: z
      .union([Schemas$IssuingCardholderListCreatedObj0.out, z.number().int()])
      .optional(),
    email: z.string().optional(),
    endingBefore: z.string().optional(),
    expand: z.array(z.string()).optional(),
    limit: z.number().int().optional(),
    phoneNumber: z.string().optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["active", "blocked", "inactive"]).optional(),
    type: z.enum(["company", "individual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      created: "created",
      email: "email",
      endingBefore: "ending_before",
      expand: "expand",
      limit: "limit",
      phoneNumber: "phone_number",
      startingAfter: "starting_after",
      status: "status",
      type: "type",
    });
  });

export const Schemas$ListRequest = {
  in: SchemaIn$ListRequest,
  out: SchemaOut$ListRequest,
};

/**
 * GetRequest
 */
export type GetRequest = {
  cardholder: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
};

/**
 * @internal
 * GetRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$GetRequest = {
  cardholder: string;
  expand?: string[] | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object GetRequest
 */
const SchemaIn$GetRequest: z.ZodType<
  GetRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cardholder: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardholder: "cardholder",
      expand: "expand",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$GetRequest
 */
const SchemaOut$GetRequest: z.ZodType<
  External$GetRequest, // output type of this zod object
  z.ZodTypeDef,
  GetRequest // the object to be transformed
> = z
  .object({
    cardholder: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardholder: "cardholder",
      expand: "expand",
    });
  });

export const Schemas$GetRequest = {
  in: SchemaIn$GetRequest,
  out: SchemaOut$GetRequest,
};

/**
 * CreateRequest
 */
export type CreateRequest = {
  /**
   * The cardholder's billing address.
   */
  billing: IssuingCardholderCreateBodyBilling;
  /**
   * Additional information about a `company` cardholder.
   */
  company?: IssuingCardholderCreateBodyCompany | undefined;
  /**
   * The cardholder's email address.
   */
  email?: string | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Additional information about an `individual` cardholder.
   */
  individual?: IssuingCardholderCreateBodyIndividual | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: IssuingCardholderCreateBodyMetadata | undefined;
  /**
   * The cardholder's name. This will be printed on cards issued to them. The maximum length of this field is 24 characters. This field cannot contain any special characters or numbers.
   */
  name: string;
  /**
   * The cardholder's phone number. This will be transformed to [E.164](https://en.wikipedia.org/wiki/E.164) if it is not provided in that format already. This is required for all cardholders who will be creating EU cards. See the [3D Secure documentation](https://stripe.com/docs/issuing/3d-secure#when-is-3d-secure-applied) for more details.
   */
  phoneNumber?: string | undefined;
  /**
   * The cardholder’s preferred locales (languages), ordered by preference. Locales can be `de`, `en`, `es`, `fr`, or `it`.
   *  This changes the language of the [3D Secure flow](https://stripe.com/docs/issuing/3d-secure) and one-time password messages sent to the cardholder.
   */
  preferredLocales?: ("de" | "en" | "es" | "fr" | "it")[] | undefined;
  /**
   * Rules that control spending across this cardholder's cards. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
   */
  spendingControls?: IssuingCardholderCreateBodySpendingControls | undefined;
  /**
   * Specifies whether to permit authorizations on this cardholder's cards. Defaults to `active`.
   */
  status?: ("active" | "inactive") | undefined;
  /**
   * One of `individual` or `company`. See [Choose a cardholder type](https://stripe.com/docs/issuing/other/choose-cardholder) for more details.
   */
  type?: ("company" | "individual") | undefined;
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  billing: External$IssuingCardholderCreateBodyBilling;
  company?: External$IssuingCardholderCreateBodyCompany | undefined;
  email?: string | undefined;
  expand?: string[] | undefined;
  individual?: External$IssuingCardholderCreateBodyIndividual | undefined;
  metadata?: External$IssuingCardholderCreateBodyMetadata | undefined;
  name: string;
  phone_number?: string | undefined;
  preferred_locales?: ("de" | "en" | "es" | "fr" | "it")[] | undefined;
  spending_controls?:
    | External$IssuingCardholderCreateBodySpendingControls
    | undefined;
  status?: ("active" | "inactive") | undefined;
  type?: ("company" | "individual") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CreateRequest
 */
const SchemaIn$CreateRequest: z.ZodType<
  CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    billing: Schemas$IssuingCardholderCreateBodyBilling.in,
    company: Schemas$IssuingCardholderCreateBodyCompany.in.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    individual: Schemas$IssuingCardholderCreateBodyIndividual.in.optional(),
    metadata: Schemas$IssuingCardholderCreateBodyMetadata.in.optional(),
    name: z.string(),
    phone_number: z.string().optional(),
    preferred_locales: z
      .array(z.enum(["de", "en", "es", "fr", "it"]))
      .optional(),
    spending_controls:
      Schemas$IssuingCardholderCreateBodySpendingControls.in.optional(),
    status: z.enum(["active", "inactive"]).optional(),
    type: z.enum(["company", "individual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billing: "billing",
      company: "company",
      email: "email",
      expand: "expand",
      individual: "individual",
      metadata: "metadata",
      name: "name",
      phone_number: "phoneNumber",
      preferred_locales: "preferredLocales",
      spending_controls: "spendingControls",
      status: "status",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CreateRequest
 */
const SchemaOut$CreateRequest: z.ZodType<
  External$CreateRequest, // output type of this zod object
  z.ZodTypeDef,
  CreateRequest // the object to be transformed
> = z
  .object({
    billing: Schemas$IssuingCardholderCreateBodyBilling.out,
    company: Schemas$IssuingCardholderCreateBodyCompany.out.optional(),
    email: z.string().optional(),
    expand: z.array(z.string()).optional(),
    individual: Schemas$IssuingCardholderCreateBodyIndividual.out.optional(),
    metadata: Schemas$IssuingCardholderCreateBodyMetadata.out.optional(),
    name: z.string(),
    phoneNumber: z.string().optional(),
    preferredLocales: z
      .array(z.enum(["de", "en", "es", "fr", "it"]))
      .optional(),
    spendingControls:
      Schemas$IssuingCardholderCreateBodySpendingControls.out.optional(),
    status: z.enum(["active", "inactive"]).optional(),
    type: z.enum(["company", "individual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      billing: "billing",
      company: "company",
      email: "email",
      expand: "expand",
      individual: "individual",
      metadata: "metadata",
      name: "name",
      phoneNumber: "phone_number",
      preferredLocales: "preferred_locales",
      spendingControls: "spending_controls",
      status: "status",
      type: "type",
    });
  });

export const Schemas$CreateRequest = {
  in: SchemaIn$CreateRequest,
  out: SchemaOut$CreateRequest,
};

/**
 * UpdateRequest
 */
export type UpdateRequest = {
  data?: IssuingCardholderUpdateBody | undefined;
  cardholder: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$IssuingCardholderUpdateBody | undefined;
  cardholder: string;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object UpdateRequest
 */
const SchemaIn$UpdateRequest: z.ZodType<
  UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    data: Schemas$IssuingCardholderUpdateBody.in.optional(),
    cardholder: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      cardholder: "cardholder",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$UpdateRequest
 */
const SchemaOut$UpdateRequest: z.ZodType<
  External$UpdateRequest, // output type of this zod object
  z.ZodTypeDef,
  UpdateRequest // the object to be transformed
> = z
  .object({
    data: Schemas$IssuingCardholderUpdateBody.out.optional(),
    cardholder: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      cardholder: "cardholder",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
