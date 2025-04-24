import {
  CustomerCreateBodyShippingObj0Address,
  External$CustomerCreateBodyShippingObj0Address,
  Schemas$CustomerCreateBodyShippingObj0Address,
} from "./customer-create-body-shipping-obj0-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * CustomerCreateBodyShippingObj0
 */
export type CustomerCreateBodyShippingObj0 = {
  address: CustomerCreateBodyShippingObj0Address;
  name: string;
  phone?: string | undefined;
};

/**
 * @internal
 * CustomerCreateBodyShippingObj0 without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$CustomerCreateBodyShippingObj0 = {
  address: External$CustomerCreateBodyShippingObj0Address;
  name: string;
  phone?: string | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object CustomerCreateBodyShippingObj0
 */
const SchemaIn$CustomerCreateBodyShippingObj0: z.ZodType<
  CustomerCreateBodyShippingObj0, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$CustomerCreateBodyShippingObj0Address.in,
    name: z.string(),
    phone: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
      phone: "phone",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$CustomerCreateBodyShippingObj0
 */
const SchemaOut$CustomerCreateBodyShippingObj0: z.ZodType<
  External$CustomerCreateBodyShippingObj0, // output type of this zod object
  z.ZodTypeDef,
  CustomerCreateBodyShippingObj0 // the object to be transformed
> = z
  .object({
    address: Schemas$CustomerCreateBodyShippingObj0Address.out,
    name: z.string(),
    phone: z.string().optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
      name: "name",
      phone: "phone",
    });
  });

export const Schemas$CustomerCreateBodyShippingObj0 = {
  in: SchemaIn$CustomerCreateBodyShippingObj0,
  out: SchemaOut$CustomerCreateBodyShippingObj0,
};
