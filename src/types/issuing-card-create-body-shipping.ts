import {
  External$IssuingCardCreateBodyShippingAddress,
  IssuingCardCreateBodyShippingAddress,
  Schemas$IssuingCardCreateBodyShippingAddress,
} from "./issuing-card-create-body-shipping-address";
import {
  External$IssuingCardCreateBodyShippingAddressValidation,
  IssuingCardCreateBodyShippingAddressValidation,
  Schemas$IssuingCardCreateBodyShippingAddressValidation,
} from "./issuing-card-create-body-shipping-address-validation";
import {
  External$IssuingCardCreateBodyShippingCustoms,
  IssuingCardCreateBodyShippingCustoms,
  Schemas$IssuingCardCreateBodyShippingCustoms,
} from "./issuing-card-create-body-shipping-customs";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The address where the card will be shipped.
 */
export type IssuingCardCreateBodyShipping = {
  address: IssuingCardCreateBodyShippingAddress;
  addressValidation?:
    | IssuingCardCreateBodyShippingAddressValidation
    | undefined;
  customs?: IssuingCardCreateBodyShippingCustoms | undefined;
  name: string;
  phoneNumber?: string | undefined;
  requireSignature?: boolean | undefined;
  service?: ("express" | "priority" | "standard") | undefined;
  type?: ("bulk" | "individual") | undefined;
};

/**
 * @internal
 * IssuingCardCreateBodyShipping without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$IssuingCardCreateBodyShipping = {
  address: External$IssuingCardCreateBodyShippingAddress;
  address_validation?:
    | External$IssuingCardCreateBodyShippingAddressValidation
    | undefined;
  customs?: External$IssuingCardCreateBodyShippingCustoms | undefined;
  name: string;
  phone_number?: string | undefined;
  require_signature?: boolean | undefined;
  service?: ("express" | "priority" | "standard") | undefined;
  type?: ("bulk" | "individual") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object IssuingCardCreateBodyShipping
 */
const SchemaIn$IssuingCardCreateBodyShipping: z.ZodType<
  IssuingCardCreateBodyShipping, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$IssuingCardCreateBodyShippingAddress.in,
    address_validation:
      Schemas$IssuingCardCreateBodyShippingAddressValidation.in.optional(),
    customs: Schemas$IssuingCardCreateBodyShippingCustoms.in.optional(),
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
 * Takes typescript data, validates it, and maps keys to match the expected external object External$IssuingCardCreateBodyShipping
 */
const SchemaOut$IssuingCardCreateBodyShipping: z.ZodType<
  External$IssuingCardCreateBodyShipping, // output type of this zod object
  z.ZodTypeDef,
  IssuingCardCreateBodyShipping // the object to be transformed
> = z
  .object({
    address: Schemas$IssuingCardCreateBodyShippingAddress.out,
    addressValidation:
      Schemas$IssuingCardCreateBodyShippingAddressValidation.out.optional(),
    customs: Schemas$IssuingCardCreateBodyShippingCustoms.out.optional(),
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

export const Schemas$IssuingCardCreateBodyShipping = {
  in: SchemaIn$IssuingCardCreateBodyShipping,
  out: SchemaOut$IssuingCardCreateBodyShipping,
};
