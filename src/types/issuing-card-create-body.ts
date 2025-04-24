import {
  External$IssuingCardCreateBodyMetadata,
  IssuingCardCreateBodyMetadata,
  Schemas$IssuingCardCreateBodyMetadata,
} from "./issuing-card-create-body-metadata";
import {
  External$IssuingCardCreateBodyPin,
  IssuingCardCreateBodyPin,
  Schemas$IssuingCardCreateBodyPin,
} from "./issuing-card-create-body-pin";
import {
  External$IssuingCardCreateBodyShipping,
  IssuingCardCreateBodyShipping,
  Schemas$IssuingCardCreateBodyShipping,
} from "./issuing-card-create-body-shipping";
import {
  External$IssuingCardCreateBodySpendingControls,
  IssuingCardCreateBodySpendingControls,
  Schemas$IssuingCardCreateBodySpendingControls,
} from "./issuing-card-create-body-spending-controls";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardCreateBody
 */
export type IssuingCardCreateBody = {
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

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (string | undefined)
    | string
    | (string[] | undefined)
    | (string | undefined)
    | (IssuingCardCreateBodyMetadata | undefined)
    | (string | undefined)
    | (IssuingCardCreateBodyPin | undefined)
    | (string | undefined)
    | (("damaged" | "expired" | "lost" | "stolen") | undefined)
    | ((string | string) | undefined)
    | (IssuingCardCreateBodyShipping | undefined)
    | (IssuingCardCreateBodySpendingControls | undefined)
    | (("active" | "inactive") | undefined)
    | ("physical" | "virtual")
    | any
    | null
    | undefined;
};

/**
 * @internal
 * IssuingCardCreateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardCreateBody = {
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

  [additionalProperty: string]:
    | (string | undefined)
    | string
    | (string[] | undefined)
    | (string | undefined)
    | (External$IssuingCardCreateBodyMetadata | undefined)
    | (string | undefined)
    | (External$IssuingCardCreateBodyPin | undefined)
    | (string | undefined)
    | (("damaged" | "expired" | "lost" | "stolen") | undefined)
    | ((string | string) | undefined)
    | (External$IssuingCardCreateBodyShipping | undefined)
    | (External$IssuingCardCreateBodySpendingControls | undefined)
    | (("active" | "inactive") | undefined)
    | ("physical" | "virtual")
    | External$IssuingCardCreateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardCreateBody
 */
const SchemaIn$IssuingCardCreateBody: z.ZodType<
  IssuingCardCreateBody, // output type of this zod object
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
  .catchall(zodRequiredAny)
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardCreateBody
 */
const SchemaOut$IssuingCardCreateBody: z.ZodType<
  External$IssuingCardCreateBody, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardCreateBody // the object to be transformed
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
  .catchall(zodRequiredAny)
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

export const Schemas$IssuingCardCreateBody = {
  in: SchemaIn$IssuingCardCreateBody,
  out: SchemaOut$IssuingCardCreateBody,
};
