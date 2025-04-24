import { zodTransform } from "@sideko-inc/stripe/core";
import * as z from "zod";

/**
 * The set of functionalities that the platform can restrict on the FinancialAccount.
 */
export type TreasuryFinancialAccountUpdateBodyPlatformRestrictions = {
  inboundFlows?: ("restricted" | "unrestricted") | undefined;
  outboundFlows?: ("restricted" | "unrestricted") | undefined;
};

/**
 * @internal
 * TreasuryFinancialAccountUpdateBodyPlatformRestrictions without any key transformation, this is what
 * we expect to come in as network data
 */
export type External$TreasuryFinancialAccountUpdateBodyPlatformRestrictions = {
  inbound_flows?: ("restricted" | "unrestricted") | undefined;
  outbound_flows?: ("restricted" | "unrestricted") | undefined;
};

/**
 * Takes network data, validates it, and transforms keys to match typescript object TreasuryFinancialAccountUpdateBodyPlatformRestrictions
 */
const SchemaIn$TreasuryFinancialAccountUpdateBodyPlatformRestrictions: z.ZodType<
  TreasuryFinancialAccountUpdateBodyPlatformRestrictions, // output type of this zod object
  z.ZodTypeDef,
  unknown
> = z
  .object({
    inbound_flows: z.enum(["restricted", "unrestricted"]).optional(),
    outbound_flows: z.enum(["restricted", "unrestricted"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      inbound_flows: "inboundFlows",
      outbound_flows: "outboundFlows",
    });
  });

/**
 * @internal
 * Takes typescript data, validates it, and maps keys to match the expected external object External$TreasuryFinancialAccountUpdateBodyPlatformRestrictions
 */
const SchemaOut$TreasuryFinancialAccountUpdateBodyPlatformRestrictions: z.ZodType<
  External$TreasuryFinancialAccountUpdateBodyPlatformRestrictions, // output type of this zod object
  z.ZodTypeDef,
  TreasuryFinancialAccountUpdateBodyPlatformRestrictions // the object to be transformed
> = z
  .object({
    inboundFlows: z.enum(["restricted", "unrestricted"]).optional(),
    outboundFlows: z.enum(["restricted", "unrestricted"]).optional(),
  })
  .transform((obj) => {
    return zodTransform(obj, {
      inboundFlows: "inbound_flows",
      outboundFlows: "outbound_flows",
    });
  });

export const Schemas$TreasuryFinancialAccountUpdateBodyPlatformRestrictions = {
  in: SchemaIn$TreasuryFinancialAccountUpdateBodyPlatformRestrictions,
  out: SchemaOut$TreasuryFinancialAccountUpdateBodyPlatformRestrictions,
};
