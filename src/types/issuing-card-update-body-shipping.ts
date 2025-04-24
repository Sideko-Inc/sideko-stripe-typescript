import {
  External$IssuingCardUpdateBodyShippingAddress,
  IssuingCardUpdateBodyShippingAddress,
  Schemas$IssuingCardUpdateBodyShippingAddress,
} from "./issuing-card-update-body-shipping-address";
import {
  External$IssuingCardUpdateBodyShippingAddressValidation,
  IssuingCardUpdateBodyShippingAddressValidation,
  Schemas$IssuingCardUpdateBodyShippingAddressValidation,
} from "./issuing-card-update-body-shipping-address-validation";
import {
  External$IssuingCardUpdateBodyShippingCustoms,
  IssuingCardUpdateBodyShippingCustoms,
  Schemas$IssuingCardUpdateBodyShippingCustoms,
} from "./issuing-card-update-body-shipping-customs";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Updated shipping information for the card.
 */
export type IssuingCardUpdateBodyShipping = {
  address: IssuingCardUpdateBodyShippingAddress;
  addressValidation?:
    | IssuingCardUpdateBodyShippingAddressValidation
    | undefined;
  customs?: IssuingCardUpdateBodyShippingCustoms | undefined;
  name: string;
  phoneNumber?: string | undefined;
  requireSignature?: boolean | undefined;
  service?: ("express" | "priority" | "standard") | undefined;
  type?: ("bulk" | "individual") | undefined;
};

/**
 * @internal
 * IssuingCardUpdateBodyShipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardUpdateBodyShipping = {
  address: External$IssuingCardUpdateBodyShippingAddress;
  address_validation?:
    | External$IssuingCardUpdateBodyShippingAddressValidation
    | undefined;
  customs?: External$IssuingCardUpdateBodyShippingCustoms | undefined;
  name: string;
  phone_number?: string | undefined;
  require_signature?: boolean | undefined;
  service?: ("express" | "priority" | "standard") | undefined;
  type?: ("bulk" | "individual") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardUpdateBodyShipping
 */
const SchemaIn$IssuingCardUpdateBodyShipping: z.ZodType<
  IssuingCardUpdateBodyShipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$IssuingCardUpdateBodyShippingAddress.in,
    address_validation:
      Schemas$IssuingCardUpdateBodyShippingAddressValidation.in.optional(),
    customs: Schemas$IssuingCardUpdateBodyShippingCustoms.in.optional(),
    name: z.string(),
    phone_number: z.string().optional(),
    require_signature: z.boolean().optional(),
    service: z.enum(["express", "priority", "standard"]).optional(),
    type: z.enum(["bulk", "individual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      address_validation: "addressValidation",
      customs: "customs",
      name: "name",
      phone_number: "phoneNumber",
      require_signature: "requireSignature",
      service: "service",
      type: "type",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardUpdateBodyShipping
 */
const SchemaOut$IssuingCardUpdateBodyShipping: z.ZodType<
  External$IssuingCardUpdateBodyShipping, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardUpdateBodyShipping // the object to be transformed
> = z
  .object({
    address: Schemas$IssuingCardUpdateBodyShippingAddress.out,
    addressValidation:
      Schemas$IssuingCardUpdateBodyShippingAddressValidation.out.optional(),
    customs: Schemas$IssuingCardUpdateBodyShippingCustoms.out.optional(),
    name: z.string(),
    phoneNumber: z.string().optional(),
    requireSignature: z.boolean().optional(),
    service: z.enum(["express", "priority", "standard"]).optional(),
    type: z.enum(["bulk", "individual"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      addressValidation: "address_validation",
      customs: "customs",
      name: "name",
      phoneNumber: "phone_number",
      requireSignature: "require_signature",
      service: "service",
      type: "type",
    });
  });

export const Schemas$IssuingCardUpdateBodyShipping = {
  in: SchemaIn$IssuingCardUpdateBodyShipping,
  out: SchemaOut$IssuingCardUpdateBodyShipping,
};
