import {
  CheckoutSessionUpdateBodyCollectedInformation,
  External$CheckoutSessionUpdateBodyCollectedInformation,
  Schemas$CheckoutSessionUpdateBodyCollectedInformation,
} from "./checkout-session-update-body-collected-information";
import {
  CheckoutSessionUpdateBodyMetadataObj0,
  External$CheckoutSessionUpdateBodyMetadataObj0,
  Schemas$CheckoutSessionUpdateBodyMetadataObj0,
} from "./checkout-session-update-body-metadata-obj0";
import {
  CheckoutSessionUpdateBodyShippingOptionsArr0Item,
  External$CheckoutSessionUpdateBodyShippingOptionsArr0Item,
  Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0Item,
} from "./checkout-session-update-body-shipping-options-arr0-item";
import { zodRequiredAny, zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CheckoutSessionUpdateBody
 */
export type CheckoutSessionUpdateBody = {
  /**
   * Information about the customer collected within the Checkout Session.
   */
  collectedInformation?:
    | CheckoutSessionUpdateBodyCollectedInformation
    | undefined;
  /**
   * Specifies which fields in the response should be expanded.
   */
  expand?: string[] | undefined;
  /**
   * Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Individual keys can be unset by posting an empty value to them. All keys can be unset by posting an empty value to `metadata`.
   */
  metadata?: (CheckoutSessionUpdateBodyMetadataObj0 | string) | undefined;
  /**
   * The shipping rate options to apply to this Session. Up to a maximum of 5.
   */
  shippingOptions?:
    | (CheckoutSessionUpdateBodyShippingOptionsArr0Item[] | string)
    | undefined;

  // Index types must also accommodate all defined properties if present (typescript limitation)
  // In reality all additional properties should only have type `any`
  // (there might be some duplication here)
  [additionalProperty: string]:
    | (CheckoutSessionUpdateBodyCollectedInformation | undefined)
    | (string[] | undefined)
    | ((CheckoutSessionUpdateBodyMetadataObj0 | string) | undefined)
    | (
        | (CheckoutSessionUpdateBodyShippingOptionsArr0Item[] | string)
        | undefined
      )
    | any
    | null
    | undefined;
};

/**
 * @internal
 * CheckoutSessionUpdateBody without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CheckoutSessionUpdateBody = {
  collected_information?:
    | External$CheckoutSessionUpdateBodyCollectedInformation
    | undefined;
  expand?: string[] | undefined;
  metadata?:
    | (External$CheckoutSessionUpdateBodyMetadataObj0 | string)
    | undefined;
  shipping_options?:
    | (External$CheckoutSessionUpdateBodyShippingOptionsArr0Item[] | string)
    | undefined;

  [additionalProperty: string]:
    | (External$CheckoutSessionUpdateBodyCollectedInformation | undefined)
    | (string[] | undefined)
    | ((External$CheckoutSessionUpdateBodyMetadataObj0 | string) | undefined)
    | (
        | (External$CheckoutSessionUpdateBodyShippingOptionsArr0Item[] | string)
        | undefined
      )
    | External$CheckoutSessionUpdateBody
    | null
    | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CheckoutSessionUpdateBody
 */
const SchemaIn$CheckoutSessionUpdateBody: z.ZodType<
  CheckoutSessionUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    collected_information:
      Schemas$CheckoutSessionUpdateBodyCollectedInformation.in.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$CheckoutSessionUpdateBodyMetadataObj0.in, z.string()])
      .optional(),
    shipping_options: z
      .union([
        z.array(Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0Item.in),
        z.string(),
      ])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      collected_information: "collectedInformation",
      expand: "expand",
      metadata: "metadata",
      shipping_options: "shippingOptions",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CheckoutSessionUpdateBody
 */
const SchemaOut$CheckoutSessionUpdateBody: z.ZodType<
  External$CheckoutSessionUpdateBody, // output type of this zod object
  z.ZodTypeDef,
  CheckoutSessionUpdateBody // the object to be transformed
> = z
  .object({
    collectedInformation:
      Schemas$CheckoutSessionUpdateBodyCollectedInformation.out.optional(),
    expand: z.array(z.string()).optional(),
    metadata: z
      .union([Schemas$CheckoutSessionUpdateBodyMetadataObj0.out, z.string()])
      .optional(),
    shippingOptions: z
      .union([
        z.array(Schemas$CheckoutSessionUpdateBodyShippingOptionsArr0Item.out),
        z.string(),
      ])
      .optional(),
  })
  .catchall(zodRequiredAny)
  .transform((obj) => {
    return zodTransform(obj, {
      collectedInformation: "collected_information",
      expand: "expand",
      metadata: "metadata",
      shippingOptions: "shipping_options",
    });
  });

export const Schemas$CheckoutSessionUpdateBody = {
  in: SchemaIn$CheckoutSessionUpdateBody,
  out: SchemaOut$CheckoutSessionUpdateBody,
};
