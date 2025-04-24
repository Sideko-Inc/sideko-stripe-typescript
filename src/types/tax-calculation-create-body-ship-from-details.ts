import {
  External$TaxCalculationCreateBodyShipFromDetailsAddress,
  Schemas$TaxCalculationCreateBodyShipFromDetailsAddress,
  TaxCalculationCreateBodyShipFromDetailsAddress,
} from "./tax-calculation-create-body-ship-from-details-address";
import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * Details about the address from which the goods are being shipped.
 */
export type TaxCalculationCreateBodyShipFromDetails = {
  address: TaxCalculationCreateBodyShipFromDetailsAddress;
};

/**
 * @internal
 * TaxCalculationCreateBodyShipFromDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TaxCalculationCreateBodyShipFromDetails = {
  address: External$TaxCalculationCreateBodyShipFromDetailsAddress;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TaxCalculationCreateBodyShipFromDetails
 */
const SchemaIn$TaxCalculationCreateBodyShipFromDetails: z.ZodType<
  TaxCalculationCreateBodyShipFromDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    address: Schemas$TaxCalculationCreateBodyShipFromDetailsAddress.in,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TaxCalculationCreateBodyShipFromDetails
 */
const SchemaOut$TaxCalculationCreateBodyShipFromDetails: z.ZodType<
  External$TaxCalculationCreateBodyShipFromDetails, // output type of this zod object
  z.ZodTypeDef,
  TaxCalculationCreateBodyShipFromDetails // the object to be transformed
> = z
  .object({
    address: Schemas$TaxCalculationCreateBodyShipFromDetailsAddress.out,
  })
  .transform((obj) => {
    return zodTransform(obj, {
      address: "address",
    });
  });

export const Schemas$TaxCalculationCreateBodyShipFromDetails = {
  in: SchemaIn$TaxCalculationCreateBodyShipFromDetails,
  out: SchemaOut$TaxCalculationCreateBodyShipFromDetails,
};
