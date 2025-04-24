import {
  External$IssuingCardUpdateBodyMetadataObj0,
  IssuingCardUpdateBodyMetadataObj0,
  Schemas$IssuingCardUpdateBodyMetadataObj0,
} from "./issuing-card-update-body-metadata-obj0";
import {
  External$IssuingCardUpdateBodyPin,
  IssuingCardUpdateBodyPin,
  Schemas$IssuingCardUpdateBodyPin,
} from "./issuing-card-update-body-pin";
import {
  External$IssuingCardUpdateBodyShipping,
  IssuingCardUpdateBodyShipping,
  Schemas$IssuingCardUpdateBodyShipping,
} from "./issuing-card-update-body-shipping";
import {
  External$IssuingCardUpdateBodySpendingControls,
  IssuingCardUpdateBodySpendingControls,
  Schemas$IssuingCardUpdateBodySpendingControls,
} from "./issuing-card-update-body-spending-controls";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * IssuingCardUpdateBody
 */
export type IssuingCardUpdateBody = {
  /**
   * Reason why the `status` of this card is `canceled`.
   */
  cancellationReason?: ("lost" | "stolen") | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (IssuingCardUpdateBodyMetadataObj0 | string) | undefined;
  personalizationDesign?: string | undefined;
  /**
   * The desired new PIN for this card.
   */
  pin?: IssuingCardUpdateBodyPin | undefined;
  /**
   * Updated shipping information for the card.
   */
  shipping?: IssuingCardUpdateBodyShipping | undefined;
  /**
   * Rules that control spending for this card. Refer to our [documentation](https://stripe.com/docs/issuing/controls/spending-controls) for more details.
   */
  spendingControls?: IssuingCardUpdateBodySpendingControls | undefined;
  /**
   * Dictates whether authorizations can be approved on this card. May be blocked from activating cards depending on past-due Cardholder requirements. Defaults to `inactive`. If this card is being canceled because it was lost or stolen, this information should be provided as `cancellation_reason`.
   */
  status?: ("active" | "canceled" | "inactive") | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (("lost" | "stolen") | undefined)
    | (string[] | undefined)
    | ((IssuingCardUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (IssuingCardUpdateBodyPin | undefined)
    | (IssuingCardUpdateBodyShipping | undefined)
    | (IssuingCardUpdateBodySpendingControls | undefined)
    | (("active" | "canceled" | "inactive") | undefined)
    | any
    | null
    | undefined;
};

/**
 * @internal
 * IssuingCardUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardUpdateBody = {
  cancellation_reason?: ("lost" | "stolen") | undefined;
  expand?: string[] | undefined;
  metadata?: (External$IssuingCardUpdateBodyMetadataObj0 | string) | undefined;
  personalization_design?: string | undefined;
  pin?: External$IssuingCardUpdateBodyPin | undefined;
  shipping?: External$IssuingCardUpdateBodyShipping | undefined;
  spending_controls?:
    | External$IssuingCardUpdateBodySpendingControls
    | undefined;
  status?: ("active" | "canceled" | "inactive") | undefined;

  [additionalProperty: string]:
    | (("lost" | "stolen") | undefined)
    | (string[] | undefined)
    | ((External$IssuingCardUpdateBodyMetadataObj0 | string) | undefined)
    | (string | undefined)
    | (External$IssuingCardUpdateBodyPin | undefined)
    | (External$IssuingCardUpdateBodyShipping | undefined)
    | (External$IssuingCardUpdateBodySpendingControls | undefined)
    | (("active" | "canceled" | "inactive") | undefined)
    | External$IssuingCardUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardUpdateBody
 */
const SchemaIn$IssuingCardUpdateBody: z.ZodType<
  IssuingCardUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    cancellation_reason: z.enum(["lost", "stolen"]).optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$IssuingCardUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    personalization_design: z.string().optional(),
    pin: Schemas$IssuingCardUpdateBodyPin.in.optional(),
    shipping: Schemas$IssuingCardUpdateBodyShipping.in.optional(),
    spending_controls:
      Schemas$IssuingCardUpdateBodySpendingControls.in.optional(),
    status: z.enum(["active", "canceled", "inactive"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      cancellation_reason: "cancellationReason",
      expand: "expand",
      metadata: "metadata",
      personalization_design: "personalizationDesign",
      pin: "pin",
      shipping: "shipping",
      spending_controls: "spendingControls",
      status: "status",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardUpdateBody
 */
const SchemaOut$IssuingCardUpdateBody: z.ZodType<
  External$IssuingCardUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardUpdateBody // the object to be transformed
> = z
  .object({
    cancellationReason: z.enum(["lost", "stolen"]).optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$IssuingCardUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    personalizationDesign: z.string().optional(),
    pin: Schemas$IssuingCardUpdateBodyPin.out.optional(),
    shipping: Schemas$IssuingCardUpdateBodyShipping.out.optional(),
    spendingControls:
      Schemas$IssuingCardUpdateBodySpendingControls.out.optional(),
    status: z.enum(["active", "canceled", "inactive"]).optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      cancellationReason: "cancellation_reason",
      expand: "expand",
      metadata: "metadata",
      personalizationDesign: "personalization_design",
      pin: "pin",
      shipping: "shipping",
      spendingControls: "spending_controls",
      status: "status",
    });
  });

export const Schemas$IssuingCardUpdateBody = {
  in: SchemaIn$IssuingCardUpdateBody,
  out: SchemaOut$IssuingCardUpdateBody,
};
