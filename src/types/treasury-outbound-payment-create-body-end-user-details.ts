import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * End user details.
 */
export type TreasuryOutboundPaymentCreateBodyEndUserDetails = {
  ipAddress?: string | undefined;
  present: boolean;
};

/**
 * @internal
 * TreasuryOutboundPaymentCreateBodyEndUserDetails without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryOutboundPaymentCreateBodyEndUserDetails = {
  ip_address?: string | undefined;
  present: boolean;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryOutboundPaymentCreateBodyEndUserDetails
 */
const SchemaIn$TreasuryOutboundPaymentCreateBodyEndUserDetails: z.ZodType<
  TreasuryOutboundPaymentCreateBodyEndUserDetails, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    ip_address: z.string().optional(),
    present: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ip_address: "ipAddress",
      present: "present",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryOutboundPaymentCreateBodyEndUserDetails
 */
const SchemaOut$TreasuryOutboundPaymentCreateBodyEndUserDetails: z.ZodType<
  External$TreasuryOutboundPaymentCreateBodyEndUserDetails, // output type of this zod object
  z.ZodTypeDef,
  TreasuryOutboundPaymentCreateBodyEndUserDetails // the object to be transformed
> = z
  .object({
    ipAddress: z.string().optional(),
    present: z.boolean(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      ipAddress: "ip_address",
      present: "present",
    });
  });

export const Schemas$TreasuryOutboundPaymentCreateBodyEndUserDetails = {
  in: SchemaIn$TreasuryOutboundPaymentCreateBodyEndUserDetails,
  out: SchemaOut$TreasuryOutboundPaymentCreateBodyEndUserDetails,
};
