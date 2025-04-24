import {
  External$TaxProductResourcePostalAddress,
  Schemas$TaxProductResourcePostalAddress,
  TaxProductResourcePostalAddress,
} from "./tax-product-resource-postal-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

export type TaxProductResourceShipFromDetails = {
  address: TaxProductResourcePostalAddress;
};

/**
 * @internal
 * TaxProductResourceShipFromDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxProductResourceShipFromDetails = {
  address: External$TaxProductResourcePostalAddress;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxProductResourceShipFromDetails
 */
const SchemaIn$TaxProductResourceShipFromDetails: z.ZodType<
  TaxProductResourceShipFromDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$TaxProductResourcePostalAddress.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxProductResourceShipFromDetails
 */
const SchemaOut$TaxProductResourceShipFromDetails: z.ZodType<
  External$TaxProductResourceShipFromDetails, // output type of this zod object
  z.ZodTypeDef,
  TaxProductResourceShipFromDetails // the object to be transformed
> = z
  .object({
    address: Schemas$TaxProductResourcePostalAddress.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

export const Schemas$TaxProductResourceShipFromDetails = {
  in: SchemaIn$TaxProductResourceShipFromDetails,
  out: SchemaOut$TaxProductResourceShipFromDetails,
};
