import { Address, External$Address, Schemas$Address } from "./address";
import {
  External$IssuingCardShippingAddressValidation,
  IssuingCardShippingAddressValidation,
  Schemas$IssuingCardShippingAddressValidation,
} from "./issuing-card-shipping-address-validation";
import {
  External$IssuingCardShippingCustoms,
  IssuingCardShippingCustoms,
  Schemas$IssuingCardShippingCustoms,
} from "./issuing-card-shipping-customs";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type IssuingCardShipping = {
  address: Address;
  addressValidation?: IssuingCardShippingAddressValidation | undefined;
  /**
   * The delivery company that shipped a card.
   */
  carrier?: ("dhl" | "fedex" | "royal_mail" | "usps") | null | undefined;
  customs?: IssuingCardShippingCustoms | undefined;
  /**
   * A unix timestamp representing a best estimate of when the card will be delivered.
   */
  eta?: number | null | undefined;
  /**
   * Recipient name.
   */
  name: string;
  /**
   * The phone number of the receiver of the shipment. Our courier partners will use this number to contact you in the event of card delivery issues. For individual shipments to the EU/UK, if this field is empty, we will provide them with the phone number provided when the cardholder was initially created.
   */
  phoneNumber?: string | null | undefined;
  /**
   * Whether a signature is required for card delivery. This feature is only supported for US users. Standard shipping service does not support signature on delivery. The default value for standard shipping service is false and for express and priority services is true.
   */
  requireSignature?: boolean | null | undefined;
  /**
   * Shipment service, such as `standard` or `express`.
   */
  service: "express" | "priority" | "standard";
  /**
   * The delivery status of the card.
   */
  status?:
    | (
        | "canceled"
        | "delivered"
        | "failure"
        | "pending"
        | "returned"
        | "shipped"
        | "submitted"
      )
    | null
    | undefined;
  /**
   * A tracking number for a card shipment.
   */
  trackingNumber?: string | null | undefined;
  /**
   * A link to the shipping carrier's site where you can view detailed information about a card shipment.
   */
  trackingUrl?: string | null | undefined;
  /**
   * Packaging options.
   */
  type: "bulk" | "individual";
};

/**
 * @internal
 * IssuingCardShipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardShipping = {
  address: External$Address;
  address_validation?:
    | External$IssuingCardShippingAddressValidation
    | undefined;
  carrier?: ("dhl" | "fedex" | "royal_mail" | "usps") | null | undefined;
  customs?: External$IssuingCardShippingCustoms | undefined;
  eta?: number | null | undefined;
  name: string;
  phone_number?: string | null | undefined;
  require_signature?: boolean | null | undefined;
  service: "express" | "priority" | "standard";
  status?:
    | (
        | "canceled"
        | "delivered"
        | "failure"
        | "pending"
        | "returned"
        | "shipped"
        | "submitted"
      )
    | null
    | undefined;
  tracking_number?: string | null | undefined;
  tracking_url?: string | null | undefined;
  type: "bulk" | "individual";
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardShipping
 */
const SchemaIn$IssuingCardShipping: z.ZodType<
  IssuingCardShipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$Address.in,
    address_validation:
      Schemas$IssuingCardShippingAddressValidation.in.optional(),
    carrier: z
      .enum(["dhl", "fedex", "royal_mail", "usps"])
      .nullable()
      .optional(),
    customs: Schemas$IssuingCardShippingCustoms.in.optional(),
    eta: z.number().int().nullable().optional(),
    name: z.string(),
    phone_number: z.string().nullable().optional(),
    require_signature: z.boolean().nullable().optional(),
    service: z.enum(["express", "priority", "standard"]),
    status: z
      .enum([
        "canceled",
        "delivered",
        "failure",
        "pending",
        "returned",
        "shipped",
        "submitted",
      ])
      .nullable()
      .optional(),
    tracking_number: z.string().nullable().optional(),
    tracking_url: z.string().nullable().optional(),
    type: z.enum(["bulk", "individual"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      address_validation: "addressValidation",
      carrier: "carrier",
      customs: "customs",
      eta: "eta",
      name: "name",
      phone_number: "phoneNumber",
      require_signature: "requireSignature",
      service: "service",
      status: "status",
      tracking_number: "trackingNumber",
      tracking_url: "trackingUrl",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardShipping
 */
const SchemaOut$IssuingCardShipping: z.ZodType<
  External$IssuingCardShipping, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardShipping // the object to be transformed
> = z
  .object({
    address: Schemas$Address.out,
    addressValidation:
      Schemas$IssuingCardShippingAddressValidation.out.optional(),
    carrier: z
      .enum(["dhl", "fedex", "royal_mail", "usps"])
      .nullable()
      .optional(),
    customs: Schemas$IssuingCardShippingCustoms.out.optional(),
    eta: z.number().int().nullable().optional(),
    name: z.string(),
    phoneNumber: z.string().nullable().optional(),
    requireSignature: z.boolean().nullable().optional(),
    service: z.enum(["express", "priority", "standard"]),
    status: z
      .enum([
        "canceled",
        "delivered",
        "failure",
        "pending",
        "returned",
        "shipped",
        "submitted",
      ])
      .nullable()
      .optional(),
    trackingNumber: z.string().nullable().optional(),
    trackingUrl: z.string().nullable().optional(),
    type: z.enum(["bulk", "individual"]),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      addressValidation: "address_validation",
      carrier: "carrier",
      customs: "customs",
      eta: "eta",
      name: "name",
      phoneNumber: "phone_number",
      requireSignature: "require_signature",
      service: "service",
      status: "status",
      trackingNumber: "tracking_number",
      trackingUrl: "tracking_url",
      type: "type",
    });
  });

export const Schemas$IssuingCardShipping = {
  in: SchemaIn$IssuingCardShipping,
  out: SchemaOut$IssuingCardShipping,
};
