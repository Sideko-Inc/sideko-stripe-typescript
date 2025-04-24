import { zodTransform } from "@sideko-inc/stripe/core";
import {
  External$IssuingCardCreateBodyMetadata,
  IssuingCardCreateBodyMetadata,
  Schemas$IssuingCardCreateBodyMetadata,
} from "@sideko-inc/stripe/types/issuing-card-create-body-metadata";
import {
  External$IssuingCardCreateBodyPin,
  IssuingCardCreateBodyPin,
  Schemas$IssuingCardCreateBodyPin,
} from "@sideko-inc/stripe/types/issuing-card-create-body-pin";
import {
  External$IssuingCardCreateBodyShipping,
  IssuingCardCreateBodyShipping,
  Schemas$IssuingCardCreateBodyShipping,
} from "@sideko-inc/stripe/types/issuing-card-create-body-shipping";
import {
  External$IssuingCardCreateBodySpendingControls,
  IssuingCardCreateBodySpendingControls,
  Schemas$IssuingCardCreateBodySpendingControls,
} from "@sideko-inc/stripe/types/issuing-card-create-body-spending-controls";
import {
  External$IssuingCardListCreatedObj0,
  IssuingCardListCreatedObj0,
  Schemas$IssuingCardListCreatedObj0,
} from "@sideko-inc/stripe/types/issuing-card-list-created-obj0";
import {
  External$IssuingCardUpdateBody,
  IssuingCardUpdateBody,
  Schemas$IssuingCardUpdateBody,
} from "@sideko-inc/stripe/types/issuing-card-update-body";
import * as z from "zod";

/**
 * ListRequest
 */
export type ListRequest = {
  /**
   * Only return cards belonging to the Cardholder with the provided ID.
   */
  cardholder?: string | undefined;
  /**
   * Only return cards that were issued during the given date interval.
   */
  created?: (IssuingCardListCreatedObj0 | number) | undefined;
  /**
   * A cursor for use in pagination. `ending_before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, starting with `obj_bar`, your subsequent call can include `ending_before=obj_bar` in order to fetch the previous page of the list.
   */
  endingBefore?: string | undefined;
  /**
   * Only return cards that have the given expiration month.
   */
  expMonth?: number | undefined;
  /**
   * Only return cards that have the given expiration year.
   */
  expYear?: number | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Only return cards that have the given last four digits.
   */
  last4?: string | undefined;
  /**
   * A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 10.
   */
  limit?: number | undefined;
  personalizationDesign?: string | undefined;
  /**
   * A cursor for use in pagination. `starting_after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with `obj_foo`, your subsequent call can include `starting_after=obj_foo` in order to fetch the next page of the list.
   */
  startingAfter?: string | undefined;
  /**
   * Only return cards that have the given status. One of `active`, `inactive`, or `canceled`.
   */
  status?: ("active" | "canceled" | "inactive") | undefined;
  /**
   * Only return cards that have the given type. One of `virtual` or `physical`.
   */
  type?: ("physical" | "virtual") | undefined;
};

/**
 * @internal
 * ListRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$ListRequest = {
  cardholder?: string | undefined;
  created?: (External$IssuingCardListCreatedObj0 | number) | undefined;
  ending_before?: string | undefined;
  exp_month?: number | undefined;
  exp_year?: number | undefined;
  expand?: string[] | undefined;
  last4?: string | undefined;
  limit?: number | undefined;
  personalization_design?: string | undefined;
  starting_after?: string | undefined;
  status?: ("active" | "canceled" | "inactive") | undefined;
  type?: ("physical" | "virtual") | undefined;
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
    cardholder: z.string().optional(),
    created: z
      .union([Schemas$IssuingCardListCreatedObj0.in, z.number().int()])
      .optional(),
    ending_before: z.string().optional(),
    exp_month: z.number().int().optional(),
    exp_year: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    last4: z.string().optional(),
    limit: z.number().int().optional(),
    personalization_design: z.string().optional(),
    starting_after: z.string().optional(),
    status: z.enum(["active", "canceled", "inactive"]).optional(),
    type: z.enum(["physical", "virtual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardholder: "cardholder",
      created: "created",
      ending_before: "endingBefore",
      exp_month: "expMonth",
      exp_year: "expYear",
      expand: "expand",
      last4: "last4",
      limit: "limit",
      personalization_design: "personalizationDesign",
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
    cardholder: z.string().optional(),
    created: z
      .union([Schemas$IssuingCardListCreatedObj0.out, z.number().int()])
      .optional(),
    endingBefore: z.string().optional(),
    expMonth: z.number().int().optional(),
    expYear: z.number().int().optional(),
    expand: z.array(z.string()).optional(),
    last4: z.string().optional(),
    limit: z.number().int().optional(),
    personalizationDesign: z.string().optional(),
    startingAfter: z.string().optional(),
    status: z.enum(["active", "canceled", "inactive"]).optional(),
    type: z.enum(["physical", "virtual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardholder: "cardholder",
      created: "created",
      endingBefore: "ending_before",
      expMonth: "exp_month",
      expYear: "exp_year",
      expand: "expand",
      last4: "last4",
      limit: "limit",
      personalizationDesign: "personalization_design",
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
  card: string;
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
  card: string;
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
    card: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
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
    card: z.string(),
    expand: z.array(z.string()).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      card: "card",
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
   * The [Cardholder](https://stripe.com/docs/api#issuing_cardholder_object) object with which the card will be associated.
   */
  cardholder?: string | undefined;
  /**
   * The currency for the card.
   */
  currency: string;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  financialAccount?: string | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: IssuingCardCreateBodyMetadata | undefined;
  /**
   * The personalization design object belonging to this card.
   */
  personalizationDesign?: string | undefined;
  /**
   * The desired PIN for this card.
   */
  pin?: IssuingCardCreateBodyPin | undefined;
  /**
   * The card this is meant to be a replacement for (if any).
   */
  replacementFor?: string | undefined;
  /**
   * If `replacement_for` is specified, this should indicate why that card is being replaced.
   */
  replacementReason?: ("damaged" | "expired" | "lost" | "stolen") | undefined;
  /**
   * The second line to print on the card. Max length: 24 characters.
   */
  secondLine?: (string | string) | undefined;
  /**
   * The address where the card will be shipped.
   */
  shipping?: IssuingCardCreateBodyShipping | undefined;
  /**
   * Rules that control spending for this card. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
   */
  spendingControls?: IssuingCardCreateBodySpendingControls | undefined;
  /**
   * Whether authorizations can be approved on this card. May be blocked from activating cards depending on past-due Cardholder requirements. Defaults to `inactive`.
   */
  status?: ("active" | "inactive") | undefined;
  /**
   * The type of card to issue. Possible values are `physical` or `virtual`.
   */
  type: "physical" | "virtual";
};

/**
 * @internal
 * CreateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CreateRequest = {
  cardholder?: string | undefined;
  currency: string;
  expand?: string[] | undefined;
  financial_account?: string | undefined;
  metadata?: External$IssuingCardCreateBodyMetadata | undefined;
  personalization_design?: string | undefined;
  pin?: External$IssuingCardCreateBodyPin | undefined;
  replacement_for?: string | undefined;
  replacement_reason?: ("damaged" | "expired" | "lost" | "stolen") | undefined;
  second_line?: (string | string) | undefined;
  shipping?: External$IssuingCardCreateBodyShipping | undefined;
  spending_controls?:
    | External$IssuingCardCreateBodySpendingControls
    | undefined;
  status?: ("active" | "inactive") | undefined;
  type: "physical" | "virtual";
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
    cardholder: z.string().optional(),
    currency: z.string(),
    expand: z.array(z.string()).optional(),
    financial_account: z.string().optional(),
    metadata: Schemas$IssuingCardCreateBodyMetadata.in.optional(),
    personalization_design: z.string().optional(),
    pin: Schemas$IssuingCardCreateBodyPin.in.optional(),
    replacement_for: z.string().optional(),
    replacement_reason: z
      .enum(["damaged", "expired", "lost", "stolen"])
      .optional(),
    second_line: z.union([z.string(), z.string()]).optional(),
    shipping: Schemas$IssuingCardCreateBodyShipping.in.optional(),
    spending_controls:
      Schemas$IssuingCardCreateBodySpendingControls.in.optional(),
    status: z.enum(["active", "inactive"]).optional(),
    type: z.enum(["physical", "virtual"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardholder: "cardholder",
      currency: "currency",
      expand: "expand",
      financial_account: "financialAccount",
      metadata: "metadata",
      personalization_design: "personalizationDesign",
      pin: "pin",
      replacement_for: "replacementFor",
      replacement_reason: "replacementReason",
      second_line: "secondLine",
      shipping: "shipping",
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
    cardholder: z.string().optional(),
    currency: z.string(),
    expand: z.array(z.string()).optional(),
    financialAccount: z.string().optional(),
    metadata: Schemas$IssuingCardCreateBodyMetadata.out.optional(),
    personalizationDesign: z.string().optional(),
    pin: Schemas$IssuingCardCreateBodyPin.out.optional(),
    replacementFor: z.string().optional(),
    replacementReason: z
      .enum(["damaged", "expired", "lost", "stolen"])
      .optional(),
    secondLine: z.union([z.string(), z.string()]).optional(),
    shipping: Schemas$IssuingCardCreateBodyShipping.out.optional(),
    spendingControls:
      Schemas$IssuingCardCreateBodySpendingControls.out.optional(),
    status: z.enum(["active", "inactive"]).optional(),
    type: z.enum(["physical", "virtual"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      cardholder: "cardholder",
      currency: "currency",
      expand: "expand",
      financialAccount: "financial_account",
      metadata: "metadata",
      personalizationDesign: "personalization_design",
      pin: "pin",
      replacementFor: "replacement_for",
      replacementReason: "replacement_reason",
      secondLine: "second_line",
      shipping: "shipping",
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
  data?: IssuingCardUpdateBody | undefined;
  card: string;
};

/**
 * @internal
 * UpdateRequest without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$UpdateRequest = {
  data?: External$IssuingCardUpdateBody | undefined;
  card: string;
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
    data: Schemas$IssuingCardUpdateBody.in.optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
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
    data: Schemas$IssuingCardUpdateBody.out.optional(),
    card: z.string(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      data: "data",
      card: "card",
    });
  });

export const Schemas$UpdateRequest = {
  in: SchemaIn$UpdateRequest,
  out: SchemaOut$UpdateRequest,
};
